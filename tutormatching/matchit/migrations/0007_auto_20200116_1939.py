# Generated by Django 3.0.2 on 2020-01-16 11:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('matchit', '0006_auto_20200116_1744'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='image',
        ),
        migrations.AddField(
            model_name='profile',
            name='image_url',
            field=models.CharField(default='https://media.publit.io/file/matchit/p1-d.jpeg', max_length=200),
        ),
    ]
