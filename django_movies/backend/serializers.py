from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', "last_login", "is_superuser", "first_name", "last_name")


class MovieChatsSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = MovieChats
        fields = ('user', 'movie_id', 'message', 'timestamp')