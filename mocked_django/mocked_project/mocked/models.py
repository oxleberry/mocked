
from django.db import models
from django.contrib.auth.models import User


class Design(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    shirtStyle = models.CharField(max_length=255)
    shirtPlacement = models.CharField(max_length=255)
    shirtColor = models.CharField(max_length=255)
    document = models.ImageField(blank=True, null=True, upload_to='uploads/')
    artWidth = models.IntegerField(blank=True, null=True)
    artPosTop = models.IntegerField(blank=True, null=True)
    artPosLeft = models.IntegerField(blank=True, null=True)
    text = models.CharField(max_length=255, blank=True, null=True)
    textFont = models.CharField(max_length=255, blank=True, null=True)
    textSize = models.IntegerField(blank=True, null=True)
    textWidth = models.IntegerField(blank=True, null=True)
    textPosTop = models.IntegerField(blank=True, null=True)
    textPosLeft = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.title
