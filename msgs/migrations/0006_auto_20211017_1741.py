# Generated by Django 3.1.13 on 2021-10-17 17:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('msgs', '0005_msg_room_assoc'),
    ]

    operations = [
        migrations.RenameField(
            model_name='msg',
            old_name='user',
            new_name='sender',
        ),
    ]
