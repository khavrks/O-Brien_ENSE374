from django.urls import path
from . import views


urlpatterns = [
    path('is_authenticated/', views.is_authenticated.as_view(),
         name='is_authenticated'),
    path('get_user/', views.GetUser.as_view(), name='get_user'),
    path('get_movie_messages/<str:movie>', views.GetMovieMessages.as_view()),
    path('send_message/<str:movie>', views.SendMessage.as_view()),
]
