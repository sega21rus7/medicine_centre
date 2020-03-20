from django.db import models

from medicine_centre import settings


class Employee(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name='Пользователь',
                             on_delete=models.CASCADE)
    post = models.CharField(verbose_name='Должность', max_length=100, null=True, blank=True)

    class Meta:
        abstract = True

    def __str__(self):
        return self.user.username


class Doctor(Employee):
    image = models.ImageField(verbose_name='Фото', upload_to='main/images/doctor')

    class Meta:
        verbose_name = 'Врач'
        verbose_name_plural = 'Врачи'


class Nurse(Employee):
    image = models.ImageField(verbose_name='Фото', upload_to='main/images/nurse')

    class Meta:
        verbose_name = 'Медсестра'
        verbose_name_plural = 'Медсестры'


class Passport(models.Model):
    series = models.CharField(verbose_name='Серия', max_length=4)
    number = models.CharField(verbose_name='Номер', max_length=6)

    class Meta:
        verbose_name = 'Паспорт'
        verbose_name_plural = 'Паспорта'


class InsurancePolicy(models.Model):
    number = models.CharField(verbose_name='Номер', max_length=16)

    class Meta:
        verbose_name = 'Полис ОМС'
        verbose_name_plural = 'Полисы ОМС'
        ordering = ('pk',)


class Patient(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name='Пользователь',
                             on_delete=models.CASCADE)
    passport = models.OneToOneField(Passport, verbose_name='Паспорт', on_delete=models.CASCADE)
    insurance_policy = models.OneToOneField(InsurancePolicy, verbose_name='Полис ОМС',
                                            on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Пациент'
        verbose_name_plural = 'Пациенты'
        ordering = ('pk',)

    def __str__(self):
        return self.user


class News(models.Model):
    title = models.CharField(max_length=100, verbose_name='Заголовок')
    content = models.TextField(verbose_name='Содержание')

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
        ordering = ('pk',)

    def __str__(self):
        return self.title


class BigNews(News):
    image = models.ImageField(verbose_name='Изображение', upload_to='main/images/big_news', null=True, blank=True)

    class Meta:
        verbose_name = 'Большая новость'
        verbose_name_plural = 'Большие новости'
        ordering = ('pk',)
