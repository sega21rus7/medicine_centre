from django import forms
from django.contrib import admin

from .models import News, Article, Tag, ArticleComment, Review, Feedback, SupportQuestion


class BaseFeedbackAdmin(admin.ModelAdmin):
    def get_form(self, request, obj=None, **kwargs):
        kwargs['widgets'] = {'content': forms.Textarea}
        return super().get_form(request, obj, **kwargs)


admin.site.register(News)
admin.site.register(Article)
admin.site.register(Tag)
admin.site.register(ArticleComment)
admin.site.register(Review, BaseFeedbackAdmin)
admin.site.register(Feedback, BaseFeedbackAdmin)
admin.site.register(SupportQuestion, BaseFeedbackAdmin)
