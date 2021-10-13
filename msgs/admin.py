from django.contrib import admin
from .models import Msg, Chatroom

# Register your models here.
admin.site.register(Msg)
admin.site.register(Chatroom)