
from django.conf.urls import include
from django.contrib import admin
from django.urls import path
# from main_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('mocked.urls')),
]
