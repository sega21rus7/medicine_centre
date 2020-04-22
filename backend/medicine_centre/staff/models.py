from django.db import models
from django.urls import reverse
from pytils.translit import slugify

from django.conf import settings


class Post(models.Model):
    name = models.CharField(verbose_name='Название', max_length=150, db_index=True)

    class Meta:
        verbose_name = 'Должность'
        verbose_name_plural = 'Должности'
        ordering = ('name',)

    def __str__(self):
        return self.name


class Employee(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, verbose_name='Пользователь',
                                on_delete=models.CASCADE)
    post = models.ForeignKey(Post, verbose_name='Должность', on_delete=models.CASCADE)
    slug = models.SlugField(max_length=150, unique=True, blank=True)

    class Meta:
        abstract = True
        ordering = ('-pk',)

    def __str__(self):
        return self.user.get_fio()

    def save(self, *args, **kwargs):
        self.slug = slugify(self.user.get_fio())
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("staff:doctor_detail", kwargs={"slug": self.slug})


class Doctor(Employee):
    class Meta:
        verbose_name = 'Врач'
        verbose_name_plural = 'Врачи'


class Nurse(Employee):
    class Meta:
        verbose_name = 'Медсестра'
        verbose_name_plural = 'Медсестры'