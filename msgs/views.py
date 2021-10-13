from rest_framework import generics
from .serializers import MsgSerializer
from .models import Msg
# from django.shortcuts import get_object_or_404
# Create your views here.


class MsgListAPIView(generics.ListCreateAPIView):  #get and post.  What other views do I need?
    queryset = Msg.objects.all() #later filter by room?  by user?
    serializer_class = MsgSerializer