from django.db import models
# from django.shortcuts import get_list_or_404
from msgs.models import Msg

# Create your models here.

class Chatroom(models.Model):
    name = models.CharField(max_length=255)
    # msgs = get_list_or_404(Msg, name=name)
    
    def __str__(self):
        return self.name 

#Does this thing have anything other than a name?  Members? Messages?  I think 
#messages have a chat room, not the other way around... but maybe I'm wrong.
#if that's the case, does it need to be a different model?  Could I not just have
#room on the msg model and use it to filter results?  Yes.  I could.  But think some
#more before removing the app.