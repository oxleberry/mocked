
import os

from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseNotFound

from django.contrib.auth.models import User
from .forms import LoginForm, DesignForm
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required

from django.contrib.auth.forms import UserCreationForm

from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.http import require_POST

from .models import Design

# Test our first view
# from django.http import HttpResponse
# def hello_world(request):
# 	return HttpResponse('<h1>Hello World! /ᐠ｡‸｡ᐟ\ﾉ</h1>')


def home(request):
    return render(request, 'mocked/home.html')

def design_list(request):
    designs = Design.objects.all()
    return render(request, 'mocked/design_list.html', {'designs': designs})

def design(request):
    designs = Design.objects.all()
    return render(request, 'mocked/design.html', {'designs': designs})

def create(request):
    return render(request, 'mocked/create.html')


# Design SHOW
def created_design(request, pk):
    design = Design.objects.get(id=pk)
    return render(request, 'mocked/created_design.html', {'design': design})

# Create a new design
@login_required
def design_form(request):
    designs = Design.objects.all()
    if request.method == 'POST':
        form = DesignForm(request.POST, request.FILES)
        print("LINE 61")
        if form.is_valid():
            print("LINE 63")
            print(request.user)
            design = form.save(commit=False)
            design.user = request.user
            print(design.user)
            # title = form.cleaned_data['title']
            # print(title)
            # design.save()
            design = form.save()
            print("LINE 65")
            return render(request, 'mocked/design_list.html', {'designs': designs})
    else:
        form = DesignForm()
    return render(request, 'mocked/design_form.html', {'form': form})


def login_user(request):
    if request.method == 'POST':
        username = request.POST['username']
        raw_password = request.POST['password']
        user = authenticate(username=username, password=raw_password)
        login(request, user)
        return redirect('home')
    else:
        form = LoginForm()
    return render(request, 'mocked/login.html', {'form': form})

def logout_user(request):
    logout(request)
    return redirect('mocked/home.html')

def signup_user(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'mocked/signup.html', {'form': form})

# Image File Upload to Database
@require_POST
def file_upload(request):
    save_path = os.path.join(settings.MEDIA_ROOT, 'uploads', request.FILES['file'])
    path = default_storage.save(save_path, request.FILES['file'])
    document = Document.objects.create(document=path, upload_by=request.user)
    return JsonResponse({'document': document.id})

# Test seed data
# def test(request):
# 	return render( request, 'mocked/test.html', {'designs': designs} )

# class Design:
#     def __init__(self,
#                  shirtStyle,
#                  shirtPlacement,
#                  shirtColor,
#                  imgFile,
#                  artSize,
#                  artPosition,
#                  text,
#                  textFont,
#                  textSize,
#                  textPosition,
#                  title,
#                  user
# 				 ):
#         self.shirtStyle = shirtStyle
#         self.shirtPlacement = shirtPlacement
#         self.shirtColor = shirtColor
#         self.imgFile = imgFile
#         self.artSize = artSize
#         self.artPosition = artPosition
#         self.text = text
#         self.textFont = textFont
#         self.textSize = textSize
#         self.textPosition = textPosition
#         self.title = title
#         self.user = user
#
# designs = [
# 	Design('Mens Tee',
# 		   'Front',
# 		   'Black',
# 		   'geo-flower.svg',
# 		   153.859,
# 		   [50, 54],
# 		   '',
# 		   '',
# 		   0,
# 		   [0, 0],
# 		   'Geo Flower',
# 		   'oxleberry' ),
# 	Design('Mens Tee',
# 		   'Front',
# 		   'Black',
# 		   'teo_pAll_2.png',
# 		   217.844,
# 		   [11, 20],
# 		   '',
# 		   '',
# 		   0,
# 		   [0, 0],
# 		   'Teotihuacan',
# 		   'De Young Museum' ),
# 	Design('Mens Tee',
# 		   'Front',
# 		   'Black',
# 		   'sugar-skull-white.svg',
# 		   89.8438,
# 		   [64, 140],
# 		   '',
# 		   '',
# 		   0,
# 		   [0, 0],
# 		   'Sugar Skull',
# 		   'oxleberry' ),
# ]
