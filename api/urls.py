from django.urls import path, include

urlpatterns = [
    path('chat/', include('msgs.urls')),  #Placeholder for now Needs view, else nothing.
    #path('rooms/', include('chatrooms.urls')),  #Placeholder for now Needs view, else nothing.
]   