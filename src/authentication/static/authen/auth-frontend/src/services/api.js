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

export async function login(email, password) {
    const response = await instance.post('/auth/jwt/create/', {email, password})
    if (response.status === 500) {
        throw new Error("Произошла неизвестная ошибка, попробуйте еще раз");
    }
    if ([400, 401].includes(response.status)) {
        throw new Error('Некорректные учетные данные');
    }

    return response.data;
}

export async function registration(email, password) {
    const response = await instance.post('/api/registr/', {email, password});
    if (response.status === 500) {
        throw new Error("Произошла неизвестная ошибка, попробуйте еще раз");
    }
    // python: response.status in (400, 401)
    if ([400, 401].includes(response.status)) {
        throw new Error(response.data.detail);
    }
    return response.data.access;
}

export async function getProfile() {
    const response = await instance.get('/api/profile/')
    return await response.data;
}


export async function getActors(params) {
     const response = await instance.get("/api/actors/", {params});
    return response.data;
}

export async function getTags() {
     const response = await instance.get("/api/tags/", );
    return response.data;
}

export async function getCities() {
     const response = await instance.get("/api/cities/", );
    return response.data;
}

export async function actorform(params) {
    const response = await instance.post('/api/actors/', params);
    if (response.status === 500) {
        throw new Error("Произошла неизвестная ошибка, попробуйте еще раз");
    }
    // python: response.status in (400, 401)
    if ([400, 401].includes(response.status)) {
        throw new Error(response.data.detail);
    }
    return response.data;
}

export async function getAccess(params) {
     const response = await instance.post('/auth/jwt/refresh/', params);
     if (response.status === 500) {
        throw new Error("Произошла неизвестная ошибка, попробуйте еще раз");
    }
    // python: response.status in (400, 401)
    if ([400, 401].includes(response.status)) {
        throw new Error(response.data.detail);
    }
    return response.data.access;
}