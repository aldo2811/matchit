# Generated by Django 3.0.2 on 2020-01-14 16:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('matchit', '0002_profile_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='first_name',
            new_name='name',
        ),
    ]