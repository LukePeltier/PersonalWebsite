# Generated by Django 3.1.7 on 2021-04-10 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tenMans', '0014_champion_riotname'),
    ]

    operations = [
        migrations.AddField(
            model_name='champion',
            name='championImage',
            field=models.ImageField(null=True, upload_to='championImages/'),
        ),
    ]