from rest_framework import generics
from .serializers import MsgSerializer, ChatroomSerializer
from .models import Msg, Chatroom
# from django.shortcuts import get_object_or_404
# Create your views here.


class MsgListAPIView(generics.ListCreateAPIView):  #get and post.  What other views do I need?
    queryset = Msg.objects.all() #later filter by room?  by user?
    serializer_class = MsgSerializer


class ChatroomListAPIView(generics.ListCreateAPIView):  #get and post.  What other views do I need?
    queryset = Chatroom.objects.all() #def need a detail view for this one, right?
    serializer_class = ChatroomSerializer