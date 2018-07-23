
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
            widget=forms.ClearableFileInput())

    artWidth = forms.IntegerField(
            widget=forms.HiddenInput(
                attrs={
                'value': '32'
                }
            ))
    artPosTop = forms.IntegerField(
            widget=forms.HiddenInput(
                attrs={
                'value': '374'
                }
            ))
    artPosLeft = forms.IntegerField(
            widget=forms.HiddenInput(
                attrs={
                'value': '9'
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
                 # 'text',
                 # 'textFont',
                 # 'textSize',
                 # 'textWidth',
                 # 'textPosTop',
                 # 'textPosLeft',
                 'title',
                 )

    # def clean(self):
    #     cleaned_data = super(DesignForm, self).clean()
    #     title = cleaned_data.get('title')
    #     shirtStyle = cleaned_data.get('shirtStyle')
    #     shirtPlacement = cleaned_data.get('shirtPlacement')
    #     shirtColor = cleaned_data.get('shirtColor')
    #     document = cleaned_data.get('document')
    #     artWidth = cleaned_data.get('artWidth')
    #     artPosTop = cleaned_data.get('artPosTop')
    #     artPosLeft = cleaned_data.get('artPosLeft')
    #     if not title and not shirtStyle and not shirtPlacement:
    #         raise forms.ValidationError('You have to write something!')
