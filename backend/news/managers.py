from django.db import models


class ImageQuerySet(models.QuerySet):
    def delete(self, *args, **kwargs):
        for obj in self:
            obj.image.delete()
        super(ImageQuerySet, self).delete(*args, **kwargs)


class NewsQuerySet(ImageQuerySet):
    pass


class ArticleQuerySet(ImageQuerySet):
    pass
