from django.urls import path
from .views import  *
from rest_framework.routers import DefaultRouter

student_router = DefaultRouter()
student_router.register("students", StudentViewset, )
urlpatterns = student_router.urls