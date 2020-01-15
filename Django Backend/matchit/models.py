from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='profile_image', blank=True)    # currently, admin needs to upload image manually

class RequestTutor(models.Model):
    person = models.ForeignKey(User, on_delete=models.CASCADE)
    course_code = models.CharField(max_length=200)
    role = models.CharField(max_length=200)                             # teacher or student
    satisfied = models.CharField(max_length=200, default = "No")