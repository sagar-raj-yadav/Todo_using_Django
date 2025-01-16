from django.db import models

# Create your models here.
class Todo(models.Model):
    title=models.CharField(max_length=200)
    completed=models.BooleanField(default=False)
    

#example
class students(models.Model):
    # id=models.AutoField() #django isko automatically add karta h (and ye primary key hota h)
    name=models.CharField(max_length=100)
    age=models.IntegerField()
    email=models.EmailField()
    address=models.TextField(null=True,blank=True)
    image=models.ImageField()
    file=models.FileField()  #upload excel or csv or other file
    field=models.BooleanField()
