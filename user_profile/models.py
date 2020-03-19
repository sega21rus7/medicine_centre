from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _


class CustomerUser(AbstractUser):
    # user = models.ForeignKey(settings.AUTH_USER_MODEL) - в дальнейшем используем так
    email = models.EmailField(_('Email address'), unique=True)
    middle_name = models.CharField(_('middle name'), max_length=150, blank=True)
    # phone_number =

    class Meta:
        verbose_name = 'пользователь'
        verbose_name_plural = 'пользователи'
        ordering = ('pk',)
