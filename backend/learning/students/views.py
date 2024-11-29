from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Students
from .serializer import StudentSerializers
import numpy as np
import joblib
import os

model_path = os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','Model','classpredictor.pkl')

model = joblib.load(model_path)

@api_view(['GET'])
def get_students(request):
    students = Students.objects.all()
    serializedData = StudentSerializers(students, many=True).data
    return Response(serializedData)


@api_view(['POST'])
def create_students(request):
    data = request.data


    # predict_data = data.copy()
    # predict_data.pop("name")
    # predict_data.pop("student_categories")
    # predict_data.pop("cluster_group")
    # serializer2 = StudentSerializers(predict_data)

    # if serializer2.is_valid():
    #     input_data = tuple(serializer2.validated_data.values())
    #     input_data_as_numpy_array = np.asarray(input_data)
    #     input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)
    #     print(input_data_reshaped)
    #     prediction = model.predict(input_data_reshaped)

    # print(data)
    # print(prediction[0])
    # data["cluster_group"] = prediction[0]
    # er_group = {0:"Below Average",1:"Above Average",2:"Strong",3:"Weak",4:"Average"}    
    # data["student_categories"] = er_group[prediction[0]]
    print(data) 
    serializer = StudentSerializers(data = data)
    print(serializer)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
