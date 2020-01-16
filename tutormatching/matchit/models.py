from django.db import models
from django.contrib.auth.models import User
import json

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    
    
class RequestTutor(models.Model):
    person = models.ForeignKey(Profile, on_delete=models.CASCADE)
    course_code = models.CharField(max_length=200)
    role = models.CharField(max_length=200)                             # teacher or student
    email = models.CharField(max_length=200, default="johndoe@gmail.com")
    image_url = models.CharField(max_length=200, default="https://media.publit.io/file/matchit/p1-d.jpeg")
    contact_no = models.CharField(max_length=200, default="01234567")
    satisfied = models.CharField(max_length=200, default = "No")

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)
