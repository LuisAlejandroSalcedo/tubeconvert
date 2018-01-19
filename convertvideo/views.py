from django.shortcuts import render
from django.http import HttpResponse
import pafy
from django.views.decorators.cache import cache_page
 
@cache_page(60 * 15)
def index(request):
	return render(request, 'convertvideo/index.html', {})

@cache_page(60 * 15)
def convert(request):
	return render(request, 'convertvideo/convert/index.html', {})

@cache_page(60 * 15)
def video(request):
	v = pafy.new(request.GET['url'])
	return render(request, 'convertvideo/v/index.html', {'video':v, 'allstreams':v.allstreams})