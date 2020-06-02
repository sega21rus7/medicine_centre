from rest_framework.fields import CurrentUserDefault


class CurrentPatientDefault(CurrentUserDefault):
    def __call__(self, serializer_field):
        return serializer_field.context['request'].user.patient


class CurrentDoctorDefault(CurrentUserDefault):
    def __call__(self, serializer_field):
        return serializer_field.context['request'].user.doctor
