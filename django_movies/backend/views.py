from urllib import response
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from requests import Request, Session, get, session
from django.core.files.storage import FileSystemStorage
from django.contrib.auth.models import User
import time
import asyncio

from .serializers import *
from .models import *

class is_authenticated(APIView):

    def get(self, request):
        response = request.user.is_authenticated
        return Response(response, status=status.HTTP_200_OK)

class GetUser(APIView):
    
        def get(self, request):
            user = request.user
            if user.is_authenticated:
                user = User.objects.get(username=user.username)
                serializeruser = UserSerializer(user)

                return Response(serializeruser.data, status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)


class GetMovieMessages(APIView):
    def get(self, request, movie):
        print(movie)
        movie_chats = MovieChats.objects.filter(movie_id=movie).order_by('-timestamp')
        serializer = MovieChatsSerializer(movie_chats, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class SendMessage(APIView):
    def post(self, request, movie):
        user = request.user
        if user.is_authenticated:
            user = User.objects.get(username=user.username)
            message = request.data['message']
            print("message", message)
            print("movie", movie)
            print("user", user)
            movie_chat = MovieChats.objects.create(
                user=user, movie_id=movie, message=message)
            movie_chat.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)