from django.contrib import admin

from .models import News, Article, Tag

admin.site.register(News)
admin.site.register(Article)
admin.site.register(Tag)
