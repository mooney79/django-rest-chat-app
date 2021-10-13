from rest_framework import generics
from .serializers import ChatroomSerializer
from .models import Chatroom
# from django.shortcuts import get_object_or_404

class ChatroomListAPIView(generics.ListCreateAPIView):  #get and post.  What other views do I need?
    queryset = Chatroom.objects.all() #def need a detail view for this one, right?
    serializer_class = ChatroomSerializer