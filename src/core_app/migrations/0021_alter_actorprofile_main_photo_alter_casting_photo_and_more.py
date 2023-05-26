# Generated by Django 4.2 on 2023-05-22 17:21

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core_app", "0020_remove_notification_casting_owner_notification_owner_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="actorprofile",
            name="main_photo",
            field=models.ImageField(blank=True, null=True, upload_to="images"),
        ),
        migrations.AlterField(
            model_name="casting",
            name="photo",
            field=models.ImageField(blank=True, null=True, upload_to="images"),
        ),
        migrations.AlterField(
            model_name="employerprofile",
            name="photo",
            field=models.ImageField(blank=True, null=True, upload_to="images"),
        ),
    ]
