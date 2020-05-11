from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from medicine_centre.paginators import StandardPagination
from medicine_centre.serializer_mixins import MultipleSerializerViewSetMixin
from .models import News, Article, Tag, ArticleComment, Review, Feedback, SupportQuestion
from .serializers import (
    NewsSerializer, ArticleListSerializer, ArticleCreateUpdateDestroySerializer,
    TagSerializer, CommentCreateUpdateDestroySerializer, ReviewListSerializer,
    ReviewCreateUpdateDestroySerializer, FeedbackSerializer, SupportQuestionListSerializer,
    SupportQuestionCreateUpdateDestroySerializer)


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    lookup_field = 'slug'
    pagination_class = StandardPagination


class ArticleViewSet(MultipleSerializerViewSetMixin, viewsets.ModelViewSet):
    queryset = Article.objects.all()
    lookup_field = 'slug'
    serializer_class = ArticleListSerializer
    serializer_action_classes = {
        'list': ArticleListSerializer,
        'create': ArticleCreateUpdateDestroySerializer,
        'update': ArticleCreateUpdateDestroySerializer,
        'destroy': ArticleCreateUpdateDestroySerializer,
    }
    pagination_class = StandardPagination


class TagListView(ListAPIView):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()


class ArticleWithTagView(ListAPIView):
    serializer_class = ArticleListSerializer
    pagination_class = StandardPagination

    def get_queryset(self):
        slug = self.kwargs['slug']
        qs = Article.objects.filter(tags__slug=slug).all()
        return qs


class ArticleCommentViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = ArticleComment.objects.all()
    serializer_class = CommentCreateUpdateDestroySerializer


class ReviewListView(ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewListSerializer


class ReviewViewSet(MultipleSerializerViewSetMixin, viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = ReviewListSerializer
    serializer_action_classes = {
        'list': ReviewListSerializer,
        'create': ReviewCreateUpdateDestroySerializer,
        'update': ReviewCreateUpdateDestroySerializer,
        'destroy': ReviewCreateUpdateDestroySerializer,
    }
    pagination_class = StandardPagination

    def get_queryset(self):
        qs = Review.objects.filter(patient__user_id=self.request.user.id).all()
        return qs


class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    pagination_class = StandardPagination


class SupportQuestionViewSet(MultipleSerializerViewSetMixin, viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = SupportQuestion.objects.all()
    serializer_class = SupportQuestionListSerializer
    serializer_action_classes = {
        'list': SupportQuestionListSerializer,
        'create': SupportQuestionCreateUpdateDestroySerializer,
        'update': SupportQuestionCreateUpdateDestroySerializer,
        'destroy': SupportQuestionCreateUpdateDestroySerializer,
    }
    pagination_class = StandardPagination
