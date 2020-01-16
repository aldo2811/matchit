from django.shortcuts import render, redirect
from django.http import HttpRequest, HttpResponse
from django.core import serializers
from django.template import loader
from django.contrib.auth.models import User, auth
from django.http import JsonResponse
from .models import Profile, RequestTutor

def addRequest(request):
    if request.method == "POST":
        current_id = request.user.id
        user = User.objects.get(id = current_id)
        person = request.user.profile
        course_code = request.POST["course_code"]
        role = request.POST["role"]
        requestTutor = RequestTutor(person=person, course_code=course_code, role=role)
        requestTutor.save()
        return render(request, 'home.html')
    else:
        return render(request, 'addtutor.html')


def home(request):
    return render(request, 'home.html')

def login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request,user)
            return redirect('home')
        else:
            # messages.info(request, 'Invalid username or password')
            return redirect('login')
    else:
        return render(request, 'login.html')

def register(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        if User.objects.filter(username = username).exists():
            # messages.info(request,'error')
            return redirect('register')    
        user = User.objects.create_user(username = username, password = password)
        user.save()
        print("User created")
        name = request.POST['name']
        # image = request.POST['image']
        profile = Profile(user=user, name = name)
        profile.save()
        return redirect('home')
    else:
        return render(request, 'register.html')

def listRequest(request):
    # return in JSON

    results = list(RequestTutor.objects.filter(satisfied = "No"))
    results_json = serializers.serialize('json', results)
    print(results)
    return HttpResponse(results_json)

    # to render without react
    # results = RequestTutor.objects.filter(satisfied = "No")
    # return render(request, 'request.html', {'results':results})       

def logout(request):
    auth.logout(request)
    return redirect('home')
