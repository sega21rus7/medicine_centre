from ckeditor.fields import RichTextField
from django.conf import settings
from django.db import models
from pytils.translit import slugify
from smartfields import fields as smart_fields


class ReferenceByNameModel(models.Model):
    name = models.CharField(verbose_name='Название', max_length=150, db_index=True)

    class Meta:
        abstract = True
        ordering = ('name',)

    def __str__(self):
        return self.name


class Department(ReferenceByNameModel):
    class Meta(ReferenceByNameModel.Meta):
        verbose_name = 'Отделение'
        verbose_name_plural = 'Отделения'


class University(ReferenceByNameModel):
    class Meta(ReferenceByNameModel.Meta):
        verbose_name = 'Высшее учебное заведение'
        verbose_name_plural = 'Высшие учебные заведения'


class DiplomaSpecialty(ReferenceByNameModel):
    class Meta(ReferenceByNameModel.Meta):
        verbose_name = 'Специальность по диплому'
        verbose_name_plural = 'Специальности по диплому'


class Post(ReferenceByNameModel):
    description = RichTextField(verbose_name='Описание', db_index=True,
                                blank=True, null=True)
    image = smart_fields.ImageField(verbose_name='Изображение', upload_to='staff/images/posts',
                                    blank=True, null=True)
    department = models.ForeignKey(Department, verbose_name='Отделение', on_delete=models.CASCADE,
                                   related_name='posts')

    class Meta(ReferenceByNameModel.Meta):
        verbose_name = 'Должность'
        verbose_name_plural = 'Должности'


class QualificationCategory(ReferenceByNameModel):
    class Meta(ReferenceByNameModel.Meta):
        verbose_name = 'Квалификационная категория'
        verbose_name_plural = 'Квалификационные категории'


class Office(models.Model):
    number = models.CharField(verbose_name='Номер', max_length=3)
    floor = models.CharField(verbose_name='Этаж', max_length=1)

    class Meta:
        verbose_name = 'Кабинет'
        verbose_name_plural = 'Кабинеты'

    def __str__(self):
        return '№ %s. Этаж %s' % (self.number, self.floor)


class Doctor(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, verbose_name='Пользователь',
                                on_delete=models.CASCADE)
    posts = models.ManyToManyField(Post, verbose_name='Должности', related_name='doctors')
    slug = models.SlugField(max_length=150, unique=True, blank=True)
    experience_from = models.CharField(verbose_name='Стаж работы c', max_length=4)
    additional_education = RichTextField(verbose_name='Дополнительное образование', db_index=True,
                                         blank=True, null=True)
    awards = RichTextField(verbose_name='Награды', db_index=True, blank=True, null=True)
    certificates = RichTextField(verbose_name='Сертификаты', db_index=True,
                                 blank=True, null=True)
    university = models.ForeignKey(University, verbose_name='Высшее учебное заведение',
                                   on_delete=models.CASCADE)
    diploma_specialty = models.ForeignKey(DiplomaSpecialty, verbose_name='Специальность по диплому',
                                          on_delete=models.CASCADE, blank=True, null=True)
    qualification_category = models.ForeignKey(QualificationCategory,
                                               verbose_name='Квалификационная категория',
                                               on_delete=models.CASCADE, blank=True, null=True)
    office = models.ForeignKey(Office, verbose_name='Кабинет',
                               on_delete=models.CASCADE, related_name='offices')

    class Meta:
        verbose_name = 'Врач'
        verbose_name_plural = 'Врачи'
        ordering = ('-pk',)

    def __str__(self):
        return str(self.user)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.user.get_fio() or self.user.username)
        super().save(*args, **kwargs)
