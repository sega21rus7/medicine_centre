from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _

from user_profile.managers import CustomerUserManager


class CustomerUser(AbstractUser):
    # user = models.ForeignKey(settings.AUTH_USER_MODEL) - в дальнейшем используем так
    username = None
    email = models.EmailField(_('Email address'), unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomerUserManager()

    class Meta:
        verbose_name = 'пользователь'
        verbose_name_plural = 'пользователи'
        ordering = ('pk',)

    def __str__(self):
        return self.email
