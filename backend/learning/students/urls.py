from django.urls import path
from .views import get_students, create_students

urlpatterns = [
    path('students/', get_students, name='get_students'),
    path('students/create/', create_students, name='create_students'),
]