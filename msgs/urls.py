from django.urls import path, include
from . import views
from .views import MsgDetail

urlpatterns = [
    path('msgs/', views.MsgListAPIView.as_view(), name = "msg_list", ),
    path('rooms/', views.ChatroomListAPIView.as_view(), name = "chatroom_list", ),
    path('msgs/<int:pk>/', MsgDetail.as_view(), name='msg_detail'),
]

