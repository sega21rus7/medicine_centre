from django.contrib import admin
from django_mptt_admin.admin import DjangoMpttAdmin

from .models import News, Article, Tag, ArticleComment


class ArticleCommentAdmin(DjangoMpttAdmin):
    pass


admin.site.register(News)
admin.site.register(Article)
admin.site.register(Tag)
admin.site.register(ArticleComment, ArticleCommentAdmin)
