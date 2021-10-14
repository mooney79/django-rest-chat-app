from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model
# from django.shortcuts import get_list_or_404

User = get_user_model()

# Create your models here.
#id?, was_edited?  Don't need was_edited.  Can compare times
class Msg(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)  
    updated_at = models.DateTimeField(auto_now=True)     
    room_assoc = models.CharField(max_length=255, null=True)
    
    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.sender

class Chatroom(models.Model):
    name = models.CharField(max_length=255)
    
    
    def __str__(self):
        return self.name  