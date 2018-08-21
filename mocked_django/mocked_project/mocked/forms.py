
from django import forms
from django.forms import CharField, PasswordInput

from django.contrib.auth.models import User
from .models import Design

class LoginForm(forms.ModelForm):
    username = CharField(max_length=100)
    password = CharField(widget=PasswordInput())
    class Meta:
        model = User
        fields = ('username', 'password')


class DesignForm(forms.ModelForm):
    title = forms.CharField(
            max_length=255,
            widget=forms.TextInput(
                attrs={
                'class': 'design-title',
                'placeholder': 'Add Design Name'
                }
            ))
    shirtStyle = forms.CharField(
            max_length=255,
            widget=forms.HiddenInput(
                attrs={
                'value': 'Mens Tee'
                }
            ))
    shirtPlacement = forms.CharField(
            max_length=255,
            widget=forms.HiddenInput(
                attrs={
                'value': 'Front'
                }
            ))
    shirtColor = forms.CharField(
            max_length=255,
            widget=forms.HiddenInput(
                attrs={
                'value': 'Black'
                }
            ))

    document = forms.ImageField(
            required = False,
            widget=forms.ClearableFileInput())

    artWidth = forms.IntegerField(
            required = False,
            widget=forms.HiddenInput(
                attrs={
                'value': 0
                }
            ))
    artPosTop = forms.IntegerField(
            required = False,
            widget=forms.HiddenInput(
                attrs={
                'value': 0
                }
            ))
    artPosLeft = forms.IntegerField(
            required = False,
            widget=forms.HiddenInput(
                attrs={
                'value': 0
                }
            ))

    text = forms.CharField(
            max_length=255,
            required = False,
            widget=forms.TextInput(
                attrs={
                'class': 'custom-text',
                'placeholder': 'Add Your Text Here',
                'value': ''
                }
            ))
    textFont = forms.CharField(
            required = False,
            max_length=255,
            widget=forms.HiddenInput(),
            )
    textSize = forms.IntegerField(
            required = False,
            widget=forms.HiddenInput(),
            )
    textColor = forms.CharField(
            required = False,
            max_length=255,
            widget=forms.HiddenInput(),
            )
    textPosTop = forms.IntegerField(
            required = False,
            widget=forms.HiddenInput(
                attrs={
                'value': 0
                }
            ))
    textPosLeft = forms.IntegerField(
            required = False,
            widget=forms.HiddenInput(
                attrs={
                'value': 0
                }
            ))

    class Meta:
        model = Design
        fields = ('shirtStyle',
                 'shirtPlacement',
                 'shirtColor',
                 'document',
                 'artWidth',
                 'artPosTop',
                 'artPosLeft',
                 'text',
                 'textFont',
                 'textSize',
                 'textColor',
                 'textPosTop',
                 'textPosLeft',
                 'title',
                 )
