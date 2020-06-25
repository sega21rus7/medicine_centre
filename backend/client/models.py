from django.conf import settings
from django.db import models

from medicine_centre.model_mixins import AdminUserMixin


class Patient(AdminUserMixin, models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, verbose_name='Пользователь',
                                on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Пациент'
        verbose_name_plural = 'Пациенты'
        ordering = ('-user',)

    def __str__(self):
        return str(self.user)