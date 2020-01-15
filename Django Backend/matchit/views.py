from django.shortcuts import render, redirect
from django.template import loader
from django.contrib.auth.models import User, auth
from .models import Profile, RequestTutor

def addRequest(request):
    if request.method == "POST":
        current_id = request.user.id
        person = User.objects.get(id = current_id)
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
        auth.login(request,user)
        return redirect('home')
    else:
        return render(request, 'register.html')

def listRequest(request):
    results = RequestTutor.objects.filter(satisfied = "No")
    print(results)
    return render(request, 'request.html', {'results': results})

def logout(request):
    auth.logout(request)
    return redirect('home')