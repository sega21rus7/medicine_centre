from ckeditor.fields import RichTextField
from django.conf import settings
from django.db import models
from django.urls import reverse
from django.utils import timezone
from django.utils.html import strip_tags
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

    image = smart_fields.ImageField(verbose_name='Изображение', upload_to='news/images/news')

    class Meta(NewsBase.Meta):
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

    def get_absolute_url(self):
        return reverse("news:news_detail", kwargs={"slug": self.slug})


class Article(NewsBase):
    objects = ArticleQuerySet.as_manager()

    image = smart_fields.ImageField(verbose_name='Изображение', upload_to='news/images/articles')
    tags = models.ManyToManyField('Tag', verbose_name='Теги', blank=True, related_name='articles')

    class Meta(NewsBase.Meta):
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'

    def get_absolute_url(self):
        return reverse("news:article_detail", kwargs={"slug": self.slug})


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

    def get_absolute_url(self):
        return reverse("news:tag_detail", kwargs={"slug": self.slug})


class ArticleComment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name='Пользователь',
                             on_delete=models.CASCADE)
    article = models.ForeignKey('Article', verbose_name='Статья', on_delete=models.CASCADE,
                                related_name='comments')
    pub_date = models.DateTimeField(verbose_name='Дата публикации', blank=True)
    content = RichTextField(verbose_name='Содержание', db_index=True)

    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии'

    def __str__(self):
        if len(self.content) > 40:
            content = '%s...' % self.content[:40]
        else:
            content = self.content
        return strip_tags(content)

    def save(self, *args, **kwargs):
        if not self.pub_date:
            self.pub_date = timezone.now()
        super().save(*args, **kwargs)
