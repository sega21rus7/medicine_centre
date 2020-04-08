from django.db import models
from django.urls import reverse
from pytils.translit import slugify


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

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class News(NewsBase):
    class Meta(NewsBase.Meta):
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

    def get_absolute_url(self):
        return reverse("news:news_detail", kwargs={"slug": self.slug})


class BigNews(NewsBase):
    image = models.ImageField(verbose_name='Изображение', upload_to='news/images/big_news')

    class Meta(NewsBase.Meta):
        verbose_name = 'Большая новость'
        verbose_name_plural = 'Большие новости'

    def get_absolute_url(self):
        return reverse("news:big_news_detail", kwargs={"slug": self.slug})
