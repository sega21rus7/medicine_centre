from django.urls import path

from .views import ArticleListView, ArticleDetailView, NewsListView, \
    NewsDetailView, ArticleCommentListView, \
    TagListView, ArticleWithTagView

app_name = 'news'

urlpatterns = [
    path('article_list/', ArticleListView.as_view(), name='article_list'),
    path('article_detail/<slug>/', ArticleDetailView.as_view(), name='article_detail'),

    path('news_list/', NewsListView.as_view(), name='news_list'),
    path('news_detail/<slug>/', NewsDetailView.as_view(), name='news_detail'),

    path('comment_list/', ArticleCommentListView.as_view(), name='comment_list'),

    path('tag_list/', TagListView.as_view(), name='tag_list'),
    path('tag_detail/<slug>/', ArticleWithTagView.as_view(), name='tag_detail'),
]
