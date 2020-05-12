from rest_framework import serializers

from lk.serializers import CustomerUserSerializer
from .models import Patient


class PatientCreateUpdateDestroySerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Patient
        fields = ('pk', 'user',)


class PatientListSerializer(PatientCreateUpdateDestroySerializer):
    user = CustomerUserSerializer(read_only=True)
