from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField
from smartfields import fields as smart_fields

from client.models import Patient


class CustomerUser(AbstractUser):
    DOCTOR = 'Доктор'
    PATIENT = 'Пациент'

    ROLE_CHOICES = (
        (DOCTOR, 'Doctor'),
        (PATIENT, 'Patient'),
    )

    email = models.EmailField(_('Email address'), unique=True)
    middle_name = models.CharField(verbose_name='Отчество', max_length=150, blank=True)
    phone_number = PhoneNumberField(verbose_name='Номер телефона', blank=True)
    avatar = smart_fields.ImageField(verbose_name='Аватар', upload_to='lk/images', blank=True, null=True)
    role = models.CharField(max_length=7, choices=ROLE_CHOICES, default=PATIENT)

    class Meta:
        verbose_name = 'пользователь'
        verbose_name_plural = 'пользователи'
        ordering = ('pk',)

    def get_fio(self):
        if self.last_name and self.first_name and self.middle_name:
            return '%s %s %s' % (self.last_name, self.first_name, self.middle_name)
        return None

    def __str__(self):
        fio = self.get_fio() or ''
        res = '%s - %s' % (self.username, self.email)
        if fio:
            res += ' - %s' % fio
        return res

    def save(self, *args, **kwargs):
        super(CustomerUser, self).save(*args, **kwargs)

        if self.role == self.PATIENT:
            Patient.objects.create(user=self)
