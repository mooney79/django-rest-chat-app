from django.urls import path, include
from . import views

urlpatterns = [
    path('msgs/', views.MsgListAPIView.as_view(), name = "msg_list", ),
    path('rooms/', views.ChatroomListAPIView.as_view(), name = "chatroom_list", )
]

