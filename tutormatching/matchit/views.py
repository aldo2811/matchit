from django.shortcuts import render, redirect
from django.contrib.auth.views import LoginView,LogoutView
from django.http import HttpRequest, HttpResponse
from django.core import serializers
from django.template import loader
from django.contrib.auth.models import User, auth
from django.urls  import reverse_lazy
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

class login(LoginView):
    template_name="matchit/login.html"
    def get_success_url(self):
        return reverse_lazy('home')

class logout(LogoutView):
    template_name="matchit/login.html"
    def get_next_page(self):
        return reverse_lazy('home')

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
    results = list(RequestTutor.objects.filter(satisfied = "No"))
    results_json = serializers.serialize('json', results)
    print(results)
    return HttpResponse(results_json)

