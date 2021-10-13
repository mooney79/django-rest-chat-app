from django.db import models
# from django.shortcuts import get_list_or_404
from msgs.models import Msg

# Create your models here.

class Chatroom(models.Model):
    name = models.CharField(max_length=255)
    # msgs = get_list_or_404(Msg, name=name)
    