from django import forms

from .models import ArticleComment


class AddCommentForm(forms.ModelForm):
    class Meta:
        model = ArticleComment
        fields = ('content',)
