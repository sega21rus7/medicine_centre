from django.db import models

from medicine_centre import settings


class Employee(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name='Пользователь')

    class Meta:
        proxy = True


class Doctor(Employee):
    image = models.ImageField(verbose_name='Фото', upload_to='main/images/doctor')

    class Meta:
        verbose_name = 'Врач'
        verbose_name_plural = 'Врачи'


class News(models.Model):
    title = models.CharField(max_length=100, verbose_name='Заголовок')
    content = models.TextField(verbose_name='Содержание')
    image = models.ImageField(verbose_name='Изображение', upload_to='main/images/news')

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
