from django.db import models
# from django.shortcuts import get_list_or_404

# Create your models here.
#id?, was_edited?  Don't need was_edited.  Can compare times
class Msg(models.Model):
    user = models.CharField(max_length=255) #Go back and associate with user account
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)  #When added
    updated_at = models.DateTimeField(auto_now=True)      #When changed
    room_assoc = models.CharField(max_length=255)
    
    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.sender

class Chatroom(models.Model):
    name = models.CharField(max_length=255)
    # msgs = get_list_or_404(Msg, name=name)
    
    def __str__(self):
        return self.name  




