from ckeditor.fields import RichTextField
from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _
from pytils.translit import slugify
from smartfields import fields as smart_fields

from .managers import ArticleQuerySet, NewsQuerySet


class NewsBase(models.Model):
    title = models.CharField(max_length=150, verbose_name='Заголовок', unique=True, db_index=True)
    content = RichTextField(verbose_name='Содержание', db_index=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=150, unique=True, blank=True)

    class Meta:
        abstract = True
        ordering = ('-pub_date',)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class News(NewsBase):
    objects = NewsQuerySet.as_manager()

    image = smart_fields.ImageField(verbose_name='Изображение', upload_to='marketing/images/news', blank=True)

    class Meta(NewsBase.Meta):
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'


class Article(NewsBase):
    objects = ArticleQuerySet.as_manager()

    image = smart_fields.ImageField(verbose_name='Изображение', upload_to='marketing/images/articles', blank=True)
    tags = models.ManyToManyField('Tag', verbose_name='Теги', blank=True, related_name='articles')

    class Meta(NewsBase.Meta):
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'


class Tag(models.Model):
    title = models.CharField(max_length=50, verbose_name='Заголовок', unique=True, db_index=True)
    slug = models.SlugField(max_length=50, unique=True, blank=True)

    class Meta:
        ordering = ('title',)
        verbose_name = 'Тег'
        verbose_name_plural = 'Теги'

    @property
    def tag_title(self):
        return '#%s' % self.title

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class BaseFeedback(models.Model):
    pub_date = models.DateTimeField(verbose_name='Дата публикации', blank=True)
    last_change_date = models.DateTimeField(verbose_name='Дата последнего изменения', blank=True, null=True)
    content = models.TextField(verbose_name='Содержание', db_index=True)

    class Meta:
        abstract = True
        ordering = ('-pub_date',)

    def __str__(self):
        return self.content

    def save(self, *args, **kwargs):
        if not self.pub_date:
            self.pub_date = timezone.now()
        else:
            self.last_change_date = timezone.now()

        super(BaseFeedback, self).save(*args, **kwargs)


class ArticleComment(BaseFeedback):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name='Пользователь',
                             on_delete=models.CASCADE)
    article = models.ForeignKey('Article', verbose_name='Статья', on_delete=models.CASCADE,
                                related_name='comments')
    content = RichTextField(verbose_name='Содержание', db_index=True)

    class Meta(BaseFeedback.Meta):
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии'

    def save(self, *args, **kwargs):
        self.content = self.content.replace('\n', '<br>')
        super(ArticleComment, self).save(*args, **kwargs)


class Review(BaseFeedback):  # отзыв
    patient = models.ForeignKey('client.Patient', verbose_name='Клиент',
                                on_delete=models.CASCADE)
    doctors = models.ManyToManyField('staff.Doctor', verbose_name='Врачи', blank=True,
                                     related_name='reviews')

    class Meta(BaseFeedback.Meta):
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'


class Feedback(BaseFeedback):  # обратная связь
    name = models.CharField(max_length=150, verbose_name='Имя', db_index=True)
    email = models.EmailField(_('Email address'), db_index=True)

    class Meta(BaseFeedback.Meta):
        verbose_name = 'Обратная связь'
        verbose_name_plural = 'Обратная связь'


class SupportQuestion(BaseFeedback):  # обращения в техподдержку
    user = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name='Пользователь',
                             on_delete=models.CASCADE)

    class Meta(BaseFeedback.Meta):
        verbose_name = 'Вопрос в техподдержку'
        verbose_name_plural = 'Вопросы в техподдержку'
