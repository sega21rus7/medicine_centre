from django.contrib.auth.models import AbstractUser


class CustomerUser(AbstractUser):
    # user = models.ForeignKey(settings.AUTH_USER_MODEL) - в дальнейшем используем так
    class Meta:
        verbose_name = 'пользователь'
        verbose_name_plural = 'пользователи'
        ordering = ('pk',)
