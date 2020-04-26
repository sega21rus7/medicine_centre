from django.urls import path

from .views import ArticleListView, ArticleDetailView, \
    NewsListView, NewsDetailView, \
    ArticleCommentListView, TagDetailView

urlpatterns = [
    path('article_list/', ArticleListView.as_view(), name='article_list'),
    path('article_detail/<slug>/', ArticleDetailView.as_view(), name='article_detail'),

    path('news_list/', NewsListView.as_view(), name='news_list_api'),
    path('news_detail/<slug>/', NewsDetailView.as_view(), name='news_detail'),

    path('comment_list/', ArticleCommentListView.as_view(), name='comment_list'),

    path('tag_detail/<slug>/', TagDetailView.as_view(), name='tag_detail'),
]