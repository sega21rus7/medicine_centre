from rest_framework import serializers

from client.serializers import PatientListSerializer
from staff.serializers import DoctorListSerializer
from .models import Reception


class ReceptionCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reception
        fields = ('pk', 'patient', 'doctor', 'from_time', 'to_time', 'date',)


class ReceptionListSerializer(ReceptionCreateUpdateDestroySerializer):
    patient = PatientListSerializer(read_only=True)
    doctor = DoctorListSerializer(read_only=True)

    class Meta(ReceptionCreateUpdateDestroySerializer.Meta):
        pass
