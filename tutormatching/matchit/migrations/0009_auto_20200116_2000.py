# Generated by Django 3.0.2 on 2020-01-16 12:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('matchit', '0008_auto_20200116_1944'),
    ]

    operations = [
        migrations.AlterField(
            model_name='requesttutor',
            name='person',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='matchit.Profile'),
        ),
    ]