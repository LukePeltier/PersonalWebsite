# Generated by Django 3.2.6 on 2021-08-07 22:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tenMans', '0022_alter_leaderboard_leaderboardviewclassname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='gameDate',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
