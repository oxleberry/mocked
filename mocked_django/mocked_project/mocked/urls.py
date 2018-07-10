
from django.urls import path
from . import views

urlpatterns = [
    # FOR testing Hello World success
    # path('', views.hello_world),
	path('', views.index, name='index'),
]
