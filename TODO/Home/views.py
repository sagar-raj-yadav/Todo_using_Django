from django.shortcuts import render
from django.http import  HttpResponse

from rest_framework.decorators import api_view
from .models import Todo
from .serializer import TodoSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

# Create your views here.

def home_page(request):
    return HttpResponse("<h1>Hello world .This is Home page</h1>")


@api_view(['GET'])
def list_todos(request):
    todos=Todo.objects.all()
    serializer=TodoSerializer(todos,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_todos(request):
    serializer=TodoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_todos(request, pk):
    try:
        todo = Todo.objects.get(pk=pk)
        todo.delete()
        return Response({"message": "task deleted"})
    except Todo.DoesNotExist:
        raise NotFound(detail="Todo not found.")