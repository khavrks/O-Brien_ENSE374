from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('pages/<str:page>/', views.pages, name='index'),
    path('movies/<str:movie>/', views.movies, name='movies'),
    path('profile/', views.index, name='profile'),
]
