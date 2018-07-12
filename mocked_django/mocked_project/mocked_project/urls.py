
# from django.conf.urls import include
from django.contrib import admin
from django.urls import path
# from main_app import views

from django.conf.urls import include, url
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('mocked.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
