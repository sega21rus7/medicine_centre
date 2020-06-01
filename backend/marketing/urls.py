from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import NewsViewSet, ArticleViewSet, TagListView, ArticleWithTagView, \
    CommentViewSet, PatientReviewViewSet, FeedbackViewSet, SupportQuestionViewSet, \
    ReviewListView, SearchArticleListView, SearchNewsListView, DoctorReviewListView

app_name = 'marketing'

urlpatterns = [
    path('api/tags/', TagListView.as_view(), name='tag_list'),
    path('api/articles_with_tag/<slug>/', ArticleWithTagView.as_view(), name='articles_with_tag'),
    path('api/reviews/', ReviewListView.as_view(), name='reviews'),
    path('api/doctor_reviews/', DoctorReviewListView.as_view(), name='doctor_reviews'),
    path('api/search_articles/<search_key>', SearchArticleListView.as_view(), name='search_articles'),
    path('api/search_news/<search_key>', SearchNewsListView.as_view(), name='search_news'),
]

router = DefaultRouter()
router.register(r'api/news', NewsViewSet, basename='news')
router.register(r'api/articles', ArticleViewSet, basename='articles')
router.register(r'api/comments', CommentViewSet, basename='comments')
router.register(r'api/patient_reviews', PatientReviewViewSet, basename='patient_reviews')
router.register(r'api/feedback', FeedbackViewSet, basename='feedback')
router.register(r'api/support', SupportQuestionViewSet, basename='user_support_question')
urlpatterns += router.urls
