from django.db import models
from django.shortcuts import get_list_or_404
from msgs import models

# Create your models here.

class Chatroom(models.Model):
    name = models.CharField(max_length=255)
    msgs = get_list_or_404(models.Msg, name=name)
    