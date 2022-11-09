from django.conf import settings
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader, RequestContext
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm

# Create your views here.


def index(request):
    context = {'segment': 'index', 'content_type': "application/x-javascript"}
    html_template = loader.get_template('frontend/index.html')
    return HttpResponse(html_template.render(context, request))

def pages(request, page):
    context = {'segment': page, 'content_type': "application/x-javascript"}
    html_template = loader.get_template('frontend/index.html')
    return HttpResponse(html_template.render(context, request))