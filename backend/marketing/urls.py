from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import NewsViewSet, ArticleViewSet, TagListView, ArticleWithTagView, \
    CommentViewSet, PatientReviewViewSet, FeedbackViewSet, SupportQuestionViewSet, \
    ReviewListView, SearchArticleListView, SearchNewsListView, DoctorReviewListView

app_name = 'marketing'

urlpatterns = [
    path('tags/', TagListView.as_view(), name='tag_list'),
    path('articles_with_tag/<slug>/', ArticleWithTagView.as_view(), name='articles_with_tag'),
    path('reviews/', ReviewListView.as_view(), name='reviews'),
    path('doctor_reviews/', DoctorReviewListView.as_view(), name='doctor_reviews'),
    path('search_articles/<search_key>/', SearchArticleListView.as_view(), name='search_articles'),
    path('search_news/<search_key>/', SearchNewsListView.as_view(), name='search_news'),
]

router = DefaultRouter()
router.register(r'news', NewsViewSet, basename='news')
router.register(r'articles', ArticleViewSet, basename='articles')
router.register(r'comments', CommentViewSet, basename='comments')
router.register(r'patient_reviews', PatientReviewViewSet, basename='patient_reviews')
router.register(r'feedback', FeedbackViewSet, basename='feedback')
router.register(r'support', SupportQuestionViewSet, basename='user_support_question')
urlpatterns += router.urls
