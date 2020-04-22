from address.models import AddressField
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField


class CustomerUser(AbstractUser):
    # user = models.ForeignKey(settings.AUTH_USER_MODEL) - в дальнейшем используем так
    email = models.EmailField(_('Email address'), unique=True)
    middle_name = models.CharField(verbose_name='Отчество', max_length=150, blank=True, null=True)
    phone_number = PhoneNumberField(verbose_name='Номер телефона', blank=True, null=True)
    address = AddressField(verbose_name='Адрес', blank=True, null=True, on_delete=models.CASCADE)
    avatar = models.ImageField(verbose_name='Аватар', upload_to='lk/images', blank=True, null=True)

    class Meta:
        verbose_name = 'пользователь'
        verbose_name_plural = 'пользователи'
        ordering = ('pk',)

    def get_fio(self):
        return '%s %s %s' % (self.last_name, self.first_name, self.middle_name)

    def get_fio_with_line_break(self):
        return self.get_fio().replace(' ', '<br>')

    def __str__(self):
        return self.get_fio()