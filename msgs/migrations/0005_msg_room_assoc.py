# Generated by Django 3.1.13 on 2021-10-14 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('msgs', '0004_auto_20211014_1639'),
    ]

    operations = [
        migrations.AddField(
            model_name='msg',
            name='room_assoc',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
