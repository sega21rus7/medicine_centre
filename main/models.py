from django.db import models


class CarouselItem(models.Model):
    title = models.CharField(max_length=150, verbose_name='Заголовок', unique=True, db_index=True)
    content = models.TextField(verbose_name='Содержание', db_index=True)
    image = models.ImageField(verbose_name='Изображение', upload_to='main/images')

    class Meta:
        verbose_name = 'Элемент карусели'
        verbose_name_plural = 'Элементы карусели'
        ordering = ('title',)


    def __str__(self):
        return self.title
