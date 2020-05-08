from rest_framework import serializers

from lk.serializers import CustomerUserSerializer
from .models import Patient


class PatientCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ('user', 'passport', 'insurance_policy',)


class PatientListSerializer(PatientCreateUpdateDestroySerializer):
    user = CustomerUserSerializer(read_only=True)
