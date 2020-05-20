from rest_framework import serializers

from client.serializers import PatientListSerializer
from staff.serializers import DoctorListSerializer, WorkTimeListSerializer
from .models import Reception


class ReceptionCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reception
        fields = ('patient', 'doctor', 'work_time',)


class ReceptionListSerializer(ReceptionCreateUpdateDestroySerializer):
    patient = PatientListSerializer(read_only=True)
    doctor = DoctorListSerializer(read_only=True)
    work_time = WorkTimeListSerializer(read_only=True)

    class Meta(ReceptionCreateUpdateDestroySerializer.Meta):
        pass
