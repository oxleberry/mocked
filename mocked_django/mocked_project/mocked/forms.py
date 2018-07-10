
from django import forms
from django.forms import CharField, PasswordInput

from django.contrib.auth.models import User

class LoginForm(forms.ModelForm):
    username = CharField(max_length=100)
    password = CharField(widget=PasswordInput())
    class Meta:
        model = User
        fields = ('username', 'password')
