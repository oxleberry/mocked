
from django.shortcuts import render

# Test our first view
from django.http import HttpResponse
def hello_world(request):
	return HttpResponse('<h1>Hello World! /ᐠ｡‸｡ᐟ\ﾉ</h1>')
