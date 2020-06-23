from rest_framework import serializers

from client.serializers import PatientListSerializer
from staff.serializers import DoctorListSerializer
from .models import Reception


class ReceptionCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reception
        fields = ('pk', 'patient', 'doctor', 'from_time', 'to_time', 'date', 'confirmed_by_doctor')

    def validate(self, attrs):
        date = attrs['date']
        from_time = attrs['from_time']
        to_time = attrs['to_time']

        if Reception.is_datetime_in_past(date, from_time, to_time):
            raise serializers.ValidationError('Прием не может состояться в прошлом!')
        if Reception.is_times_equal(from_time, to_time):
            raise serializers.ValidationError('Время начала приема не должно совпадать с временем его окончания!')
        elif Reception.is_to_time_greater_then_from_time(from_time, to_time):
            raise serializers.ValidationError('Время начала приема не может быть больше его окончания!')
        elif Reception.is_time_out_of_reception_range(from_time, to_time):
            raise serializers.ValidationError('Прием должен длиться от 20 до 40 минут!')
        elif Reception.is_time_out_of_working_range(from_time, to_time):
            raise serializers.ValidationError('Время работы центра с 8 до 20!')
        return attrs


class ReceptionListSerializer(ReceptionCreateUpdateDestroySerializer):
    patient = PatientListSerializer(read_only=True)
    doctor = DoctorListSerializer(read_only=True)

    class Meta(ReceptionCreateUpdateDestroySerializer.Meta):
        pass
