from django.urls import path, include
from django.conf.urls.static import static

from django.conf import settings
from . import views

app_name = 'news'

urlpatterns = [
    path('article_list/', views.ArticleView.as_view(), name='article_list'),
    path('news_list/', views.NewsView.as_view(), name='news_list'),

    path('article/<str:slug>/', views.ArticleDetailView.as_view(), name='article_detail'),
    path('new/<str:slug>/', views.NewsDetailView.as_view(), name='news_detail'),
    path('tag/<str:slug>/', views.TagDetailView.as_view(), name='tag_detail'),

    path('api/', include('news.api.urls'))
]