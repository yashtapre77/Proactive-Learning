from rest_framework import serializers
from .models import * 

class StudentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ( "sex","age", "address","famsize", "Pstatus", "Medu","Fedu","Mjob","Fjob","reason","guardian","traveltime","studytime","failures","schoolsup","famsup","paid","activities","nursery","higher","internet","romantic","famrel", "freetime","goout","Dalc","Walc","health","absences","G1","G2","G3","G4","G5","G6","G7","Grade_8_Marks","Grade_9_Marks","Grade_10_Marks","Grade_11_Marks","Grade_12_Marks","name", "semester","course","student_categories","cluster_group")