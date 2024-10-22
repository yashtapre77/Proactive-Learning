from rest_framework.routers import DefaultRouter
from students.urls import student_router
from django.urls import path, include

router = DefaultRouter()

router.registry.extend(student_router.registry)

urlpatterns = [
    path('', include(router.urls)),
]
