from rest_framework import generics
from .serializers import MsgSerializer, ChatroomSerializer, UserSerializer
from .models import Msg, Chatroom, User
from django.shortcuts import get_object_or_404
# Create your views here.


class MsgListAPIView(generics.ListCreateAPIView):  #get and post.  What other views do I need?
    queryset = Msg.objects.all() #later filter by room?  by user?
    serializer_class = MsgSerializer

    def perform_create(self, serializer):
        sender = get_object_or_404(User, id=self.kwargs['pk'])
        serializer.save(sender=User)


class ChatroomListAPIView(generics.ListCreateAPIView):  #get and post.  What other views do I need?
    queryset = Chatroom.objects.all() #def need a detail view for this one, right?
    serializer_class = ChatroomSerializer

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [IsAdminUser]

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    
    def get_queryset(self):
        pk = self.kwargs['pk']
        return User.objects.filter(pk=pk)