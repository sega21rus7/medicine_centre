from django.contrib import admin

from .models import News, Article, Tag, ArticleComment, Review, Feedback

admin.site.register(News)
admin.site.register(Article)
admin.site.register(Tag)
admin.site.register(ArticleComment)
admin.site.register(Review)
admin.site.register(Feedback)
