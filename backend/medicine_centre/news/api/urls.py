from django.urls import path

from .views import ArticleShortListView, ArticleDetailView, \
    NewsShortListView, NewsDetailView, \
    ArticleCommentListView, TagDetailView

urlpatterns = [
    path('article_short_list/', ArticleShortListView.as_view(), name='article_list_api'),
    path('article_detail/<slug>/', ArticleDetailView.as_view(), name='article_detail_api'),

    path('news_short_list/', NewsShortListView.as_view(), name='news_list_api'),
    path('news_detail/<slug>/', NewsDetailView.as_view(), name='news_detail_api'),

    path('comment_list/', ArticleCommentListView.as_view(), name='comment_list_api'),

    path('tag_detail/<slug>/', TagDetailView.as_view(), name='tag_detail_api'),
]
