from allauth.account.models import EmailAddress
from django.contrib.auth import get_user_model
from rest_auth.serializers import UserDetailsSerializer as RestCustomerUserSerializer, \
    PasswordResetSerializer as RestPasswordResetSerializer, \
    ValidationError
from rest_framework import serializers

from medicine_centre import settings

User = get_user_model()


class CustomerUserSerializer(RestCustomerUserSerializer):
    class Meta(RestCustomerUserSerializer.Meta):
        fields = ('pk', 'username', 'email', 'first_name', 'last_name',
                  'middle_name', 'phone_number', 'avatar', 'doctor', 'patient', 'is_superuser')
        read_only_fields = ('doctor', 'patient', 'is_superuser')


class PasswordResetSerializer(RestPasswordResetSerializer):
    def validate_email(self, value):
        value = super(PasswordResetSerializer, self).validate_email(value)
        if not User.objects.filter(email__iexact=value, is_active=True).exists():
            raise ValidationError('Пользователя с таким email не существует')
        return value

    def get_email_options(self):
        data = {
            'domain_override': settings.URL_FRONT,
            'email_template_name': 'registration/password_reset_email.html',
        }
        return data
