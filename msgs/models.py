from django.db import models

# Create your models here.
#id?, was_edited?  Don't need was_edited.  Can compare times
class Msg(models.Model):
    sender = models.CharField(max_length=255) #Go back and associate with user account
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)  #When added
    updated_at = models.DateTimeField(auto_now=True)      #When changed
    room_assoc = models.CharField(max_length=255)
    
    class Meta:
        ordering = ('-created_at',)