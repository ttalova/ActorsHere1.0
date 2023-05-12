import {API_URL} from "../consts";
import axios from "axios";
import {useAuthStore} from "../stores/auth";
const instance = axios.create({
    baseURL: API_URL,
});

instance.interceptors.request.use(function (config) {
    const auth = useAuthStore();
    if (auth.access) {
        config.headers['Authorization'] = `JWT ${auth.access}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export async function getCasting(user_id) {
     const response = await instance.get(`/api/castings/${user_id}/get_users_castings/`);
     return response.data;
}

export async function getListOfCastings() {
     const response = await instance.get(`/api/castings/`);
     return response.data;
}

export async function getCastingbyId(id) {
     const response = await instance.get(`/api/castings/${id}/`);
     return response.data;
}

export async function createCastingForm(params) {
    const response = await instance.post('/api/castings/', params);
    if (response.status === 500) {
        throw new Error("Произошла неизвестная ошибка, попробуйте еще раз");
    }
    // python: response.status in (400, 401)
    if ([400, 401].includes(response.status)) {
        throw new Error(response.data.detail);
    }
    return response.data;
}

export async function updateCastingForm(params) {
    const response = await instance.put(`/api/castings/${params.id}/`, params);
    if (response.status === 500) {
        throw new Error("Произошла неизвестная ошибка, попробуйте еще раз");
    }
    // python: response.status in (400, 401)
    if ([400, 401].includes(response.status)) {
        throw new Error(response.data.detail);
    }
    return response.data;
}

export async function deleteCastingForm(form_id) {
    const response = await instance.delete(`/api/castings/${form_id}/`);
    if (response.status === 500) {
        throw new Error("Произошла неизвестная ошибка, попробуйте еще раз");
    }
    // python: response.status in (400, 401)
    if ([400, 401].includes(response.status)) {
        throw new Error(response.data.detail);
    }
    return response.data;
}
