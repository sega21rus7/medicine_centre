from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import NewsViewSet, ArticleViewSet, TagListView, ArticleWithTagView

app_name = 'news'

urlpatterns = [
    path('api/tags/', TagListView.as_view(), name='tag_list'),
    path('api/tags/<slug>/', ArticleWithTagView.as_view(), name='tag_detail'),
]

router = DefaultRouter()
router.register(r'api/news', NewsViewSet, basename='news')
router.register(r'api/articles', ArticleViewSet, basename='articles')
urlpatterns += router.urls
