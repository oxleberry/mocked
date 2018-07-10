
from django.urls import path
from . import views

from django.conf.urls import include, url
from django.contrib.auth import views as auth_views
from django.contrib.auth.views import logout

urlpatterns = [
    # FOR testing Hello World success
    # path('', views.hello_world),
    path('', views.home, name='home'),
	# path('', views.index, name='index'),
    path('login/', views.login_user, name='login_user'),
    path('logout_user', logout, name='logout_user'),
    path('signup/', views.signup_user, name='signup_user'),    
]
