# Generated by Django 4.1.7 on 2023-05-26 07:55

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("core_app", "0023_alter_actorprofile_body_type_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="employerprofile",
            name="photo",
        ),
    ]
