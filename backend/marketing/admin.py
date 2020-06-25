from django.contrib import admin

from .models import News, Article, Tag, ArticleComment, Review, Feedback, SupportQuestion


class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'pub_date',)


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'pub_date',)


class ArticleCommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'content', 'pub_date', 'last_change_date',)


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('patient', 'positives', 'negatives', 'content', 'doctor', 'pub_date', 'last_change_date',)


class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'content', 'pub_date',)


class SupportQuestionAdmin(admin.ModelAdmin):
    list_display = ('user', 'content', 'answer', 'pub_date', 'last_change_date',)


admin.site.register(News, NewsAdmin)
admin.site.register(Article, ArticleAdmin)
admin.site.register(Tag)
admin.site.register(ArticleComment, ArticleCommentAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Feedback, FeedbackAdmin)
admin.site.register(SupportQuestion, SupportQuestionAdmin)
