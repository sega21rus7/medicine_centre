from django.conf import settings
from django.db import models
from pytils.translit import slugify


class Department(models.Model):
    name = models.CharField(verbose_name='Название', max_length=150, db_index=True)

    class Meta:
        verbose_name = 'Отделение'
        verbose_name_plural = 'Отделения'
        ordering = ('name',)

    def __str__(self):
        return self.name


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
    experience = models.IntegerField(verbose_name='Стаж работы', max_length=2)
    department = models.ForeignKey(Department, verbose_name='Отделение', on_delete=models.CASCADE)

    class Meta:
        abstract = True

    def __str__(self):
        return str(self.user)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.user.get_fio() or self.user.username)
        super().save(*args, **kwargs)


class Doctor(Employee):
    class Meta:
        verbose_name = 'Врач'
        verbose_name_plural = 'Врачи'
        ordering = ('-pk',)


class Nurse(Employee):
    class Meta:
        verbose_name = 'Медсестра'
        verbose_name_plural = 'Медсестры'
        ordering = ('-pk',)
