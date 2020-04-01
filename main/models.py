from django.db import models
from django.urls import reverse
from pytils.translit import slugify

from medicine_centre import settings


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
        ordering = ('pk',)

    def __str__(self):
        return self.user.username

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)


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
    series = models.CharField(verbose_name='Серия', max_length=4, db_index=True)
    number = models.CharField(verbose_name='Номер', max_length=6, db_index=True)

    class Meta:
        verbose_name = 'Паспорт'
        verbose_name_plural = 'Паспорта'


class InsurancePolicy(models.Model):
    number = models.CharField(verbose_name='Номер', max_length=16, db_index=True)

    class Meta:
        verbose_name = 'Полис ОМС'
        verbose_name_plural = 'Полисы ОМС'
        ordering = ('-pk',)


class Patient(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name='Пользователь',
                             on_delete=models.CASCADE, related_name='patients')
    passport = models.OneToOneField(Passport, verbose_name='Паспорт', on_delete=models.CASCADE)
    insurance_policy = models.OneToOneField(InsurancePolicy, verbose_name='Полис ОМС',
                                            on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Пациент'
        verbose_name_plural = 'Пациенты'
        ordering = ('-pk',)

    def __str__(self):
        return self.user


class NewsBase(models.Model):
    title = models.CharField(max_length=150, verbose_name='Заголовок', unique=True, db_index=True)
    content = models.TextField(verbose_name='Содержание', db_index=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=150, unique=True, blank=True)

    class Meta:
        abstract = True
        ordering = ('-pub_date',)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("main:news_detail", kwargs={"slug": self.slug})

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class News(NewsBase):
    class Meta(NewsBase.Meta):
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

    def __str__(self):
        return self.title


class BigNews(NewsBase):
    image = models.ImageField(verbose_name='Изображение', upload_to='main/images/big_news', null=True, blank=True)

    class Meta(NewsBase.Meta):
        verbose_name = 'Большая новость'
        verbose_name_plural = 'Большие новости'
