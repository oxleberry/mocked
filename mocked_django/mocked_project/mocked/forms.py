
from django import forms
from django.forms import CharField, PasswordInput

from django.contrib.auth.models import User

class LoginForm(forms.ModelForm):
    username = CharField(max_length=100)
    password = CharField(widget=PasswordInput())
    class Meta:
        model = User
        fields = ('username', 'password')


class DesignForm(forms.ModelForm):

    class Meta:
        model = Design
        fields = ('user',
                 'title',
                 'shirtStyle',
                 'shirtPlacement',
                 'shirtColor',
                 'artFile',
                 'artWidth',
                 'artPosTop',
                 'artPosLeft',
                 'text',
                 'textFont',
                 'textSize',
                 'textWidth',
                 'textPosTop',
                 'textPosLeft',
                 )
