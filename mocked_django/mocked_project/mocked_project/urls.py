
# from django.conf.urls import include
from django.contrib import admin
from django.urls import path
# from main_app import views

from django.conf.urls import include, url
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('mocked.urls')),
]
