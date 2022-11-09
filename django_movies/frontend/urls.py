from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('pages/<str:page>/', views.pages, name='index'),
    path('profile/', views.index, name='profile'),
]
