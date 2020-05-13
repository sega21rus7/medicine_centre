from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import NewsViewSet, ArticleViewSet, TagListView, ArticleWithTagView, \
    ArticleCommentViewSet, UserReviewViewSet, FeedbackViewSet, SupportQuestionViewSet, \
    ReviewListView, SearchArticleListView

app_name = 'marketing'

urlpatterns = [
    path('api/tags/', TagListView.as_view(), name='tag_list'),
    path('api/articles_with_tag/<slug>/', ArticleWithTagView.as_view(), name='articles_with_tag'),
    path('api/reviews/', ReviewListView.as_view(), name='reviews'),
    path('api/search_articles/<search_key>', SearchArticleListView.as_view(), name='search_articles'),
]

router = DefaultRouter()
router.register(r'api/news', NewsViewSet, basename='news')
router.register(r'api/articles', ArticleViewSet, basename='articles')
router.register(r'api/comments', ArticleCommentViewSet, basename='comments')
router.register(r'api/user_reviews', UserReviewViewSet, basename='user_reviews')
router.register(r'api/feedback', FeedbackViewSet, basename='feedback')
router.register(r'api/user_support_questions', SupportQuestionViewSet, basename='support_question')
urlpatterns += router.urls
