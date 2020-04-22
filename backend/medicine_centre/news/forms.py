from ckeditor.widgets import CKEditorWidget
from django import forms

from .models import ArticleComment


class AddCommentForm(forms.ModelForm):
    content = forms.CharField(label='', widget=CKEditorWidget())

    class Meta:
        model = ArticleComment
        fields = ('content',)

    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)
