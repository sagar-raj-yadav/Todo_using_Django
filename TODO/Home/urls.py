from django.urls import path
from .views import list_todos, add_todos,home_page,delete_todos

urlpatterns = [
    path('', home_page),
    path('todos/', list_todos),
    path('todos/add/', add_todos),
    path('todos/delete/<int:pk>/', delete_todos),

]
