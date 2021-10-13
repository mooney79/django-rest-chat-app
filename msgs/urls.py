from django.urls import path, include
from . import views

urlpatterns = [
    # path('<int:book>/reviews/<int:pk>/', views.ReviewDetailAPIView.as_view(),name = "review_detail_by_book"),
    # path('<int:book>/reviews/', views.ReviewListAPIView.as_view(), name = "review_list_by_book"),
    # path('<int:pk>/', views.BookDetailAPIView.as_view(), name="book_detail"),
    path('msgs/', views.MsgListAPIView.as_view(), name = "msg_list", ),
    path('rooms/', views.ChatroomListAPIView.as_view(), name = "chatroom_list", )
]

