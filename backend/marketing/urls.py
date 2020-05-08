from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import NewsViewSet, ArticleViewSet, TagListView, ArticleWithTagView, \
    ArticleCommentViewSet, ReviewViewSet, FeedbackViewSet, SupportQuestionViewSet

app_name = 'marketing'

urlpatterns = [
    path('api/tags/', TagListView.as_view(), name='tag_list'),
    path('api/articles_with_tag/<slug>/', ArticleWithTagView.as_view(), name='tag_detail'),
]

router = DefaultRouter()
router.register(r'api/news', NewsViewSet, basename='news')
router.register(r'api/articles', ArticleViewSet, basename='articles')
router.register(r'api/comments', ArticleCommentViewSet, basename='comments')
router.register(r'api/reviews', ReviewViewSet, basename='reviews')
router.register(r'api/feedback', FeedbackViewSet, basename='feedback')
router.register(r'api/support_question', SupportQuestionViewSet, basename='support_question')
urlpatterns += router.urls
