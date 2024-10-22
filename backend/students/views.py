from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializers_std import *
from rest_framework.response import Response
from rest_framework import permissions



# Create your views here.

class StudentViewset(ModelViewSet):

    permission_classes = [permissions.AllowAny]
    queryset = Students.objects.all() 
    serializer_class = StudentSerializers

    # def list(self, request):
    #     queryset = self.queryset
    #     serializer = self.serializer_class(queryset, many=True)
    #     return Response(serializer.data)
    
    # def create(self, request):
    #     serializer = self.serializer_class(data = request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     else:
    #         return Response(serializer.errors, status = 400)
    
    # def retrieve(self, request, pk = None):
    #     student = self.queryset.get(pk = pk)
    #     serializer = self.serializer_class(student)
    #     return Response(serializer.data)     

    # def update(self, request, pk = None):
    #     student = self.queryset.get(pk = pk)
    #     serializer = self.serializer_class(student, data = request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     else:
    #         return Response(serializer.errors, status = 400)
        
    # def destroy(self, request, pk = None):
    #     project = self.queryset.get(pk = pk )
    #     project.delete()
    #     return Response(status = 204)