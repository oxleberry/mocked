
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

# Test our first view
# from django.http import HttpResponse
# def hello_world(request):
# 	return HttpResponse('<h1>Hello World! /ᐠ｡‸｡ᐟ\ﾉ</h1>')

def index(request):
	return render( request, 'mocked/index.html', {'designs': designs} )

class Design:
    def __init__(self,
                 shirtStyle,
                 shirtPosition,
                 shirtColor,
                 imgFile,
                 artSize,
                 artPosition,
                 text,
                 textFont,
                 textSize,
                 textPosition,
                 title,
                 user
				 ):
        self.shirtStyle = shirtStyle
        self.shirtPosition = shirtPosition
        self.shirtColor = shirtColor
        self.imgFile = imgFile
        self.artSize = artSize
        self.artPosition = artPosition
        self.text = text
        self.textFont = textFont
        self.textSize = textSize
        self.textPosition = textPosition
        self.title = title
        self.user = user

designs = [
	Design('Mens Tee',
		   'Front',
		   'Black',
		   'geo-flower.svg',
		   153.859,
		   [50, 54],
		   '',
		   '',
		   0,
		   [0, 0],
		   'Geo Flower',
		   'oxleberry' ),
	Design('Mens Tee',
		   'Front',
		   'Black',
		   'teo_pAll_2.png',
		   217.844,
		   [11, 20],
		   '',
		   '',
		   0,
		   [0, 0],
		   'Teotihuacan',
		   'De Young Museum' ),
	Design('Mens Tee',
		   'Front',
		   'Black',
		   'sugar-skull-white.svg',
		   89.8438,
		   [64, 140],
		   '',
		   '',
		   0,
		   [0, 0],
		   'Sugar Skull',
		   'oxleberry' ),
]
