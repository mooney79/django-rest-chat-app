from rest_framework import serializers
from .models import Msg, Chatroom

class MsgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Msg
        fields = ('__all__')


class ChatroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chatroom
        fields = ('__all__')