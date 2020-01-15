from django.urls import path 
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('register/', views.register, name="register"),
    path('addtutor/', views.addRequest, name="addtutor"),
    path('login/', views.login, name="login"),
    path('request/', views.listRequest, name="listRequest"),
    path('logout', views.logout, name="logout"),
]