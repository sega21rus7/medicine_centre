from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _


class CustomerUser(AbstractUser):
    email = models.EmailField(_('Email address'), unique=True)

    # user = models.ForeignKey(settings.AUTH_USER_MODEL) - в дальнейшем используем так
    class Meta:
        verbose_name = 'пользователь'
        verbose_name_plural = 'пользователи'
        ordering = ('pk',)
