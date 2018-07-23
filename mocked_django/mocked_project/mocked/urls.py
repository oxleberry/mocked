
from django.urls import path
from . import views

from django.conf.urls import include, url
from django.contrib.auth import views as auth_views
from django.contrib.auth.views import logout

# from django.conf import settings
# from django.conf.urls.static import static

urlpatterns = [
    # FOR testing Hello World success
    # path('', views.hello_world),
    path('', views.home, name='home'),
	# path('', views.index, name='index'),
    path('login/', views.login_user, name='login_user'),
    path('logout_user', logout, name='logout_user'),
    path('signup/', views.signup_user, name='signup_user'),
    path('gallery/', views.design_list, name='design_list'),
    path('design/', views.design, name='design'),
    path('create/', views.create, name='create'),
    path('created_design/', views.created_design, name='created_design'),
    path('design_form/', views.design_form, name='design_form'),
    # path('designs/new', views.design_create, name='design_create'),

]
