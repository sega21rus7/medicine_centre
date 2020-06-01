from django.db.models import Q
from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser

from medicine_centre.paginators import PaginationBy3
from medicine_centre.serializer_mixins import MultipleSerializerViewSetMixin, MultiplePermissionsViewSetMixin
from .models import News, Article, Tag, ArticleComment, Review, Feedback, SupportQuestion
from .serializers import (
    NewsSerializer, ArticleListSerializer, ArticleCreateUpdateDestroySerializer,
    TagSerializer, CommentCreateUpdateDestroySerializer, ReviewListSerializer,
    ReviewCreateUpdateDestroySerializer, FeedbackSerializer, SupportQuestionListSerializer,
    SupportQuestionCreateUpdateDestroySerializer)


class NewsViewSet(viewsets.ModelViewSet, MultiplePermissionsViewSetMixin):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    lookup_field = 'slug'
    pagination_class = PaginationBy3
    serializer_permission_classes = (AllowAny,)
    crud_serializer_permission_classes = (IsAdminUser,)


class SearchArticleListView(ListAPIView):
    serializer_class = ArticleListSerializer
    pagination_class = PaginationBy3

    def get_queryset(self):
        search_key = self.kwargs['search_key']
        qs = Article.objects.filter(
            Q(title__icontains=search_key) |
            Q(content__icontains=search_key)).all()
        return qs


class SearchNewsListView(ListAPIView):
    serializer_class = NewsSerializer
    pagination_class = PaginationBy3

    def get_queryset(self):
        search_key = self.kwargs['search_key']
        qs = News.objects.filter(
            Q(title__icontains=search_key) |
            Q(content__icontains=search_key)).all()
        return qs


class ArticleViewSet(MultipleSerializerViewSetMixin, MultiplePermissionsViewSetMixin,
                     viewsets.ModelViewSet):
    queryset = Article.objects.all()
    lookup_field = 'slug'
    serializer_class = ArticleListSerializer
    crud_serializer_class = ArticleCreateUpdateDestroySerializer
    pagination_class = PaginationBy3
    serializer_permission_classes = (AllowAny,)
    crud_serializer_permission_classes = (IsAdminUser,)


class TagListView(ListAPIView):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()


class ArticleWithTagView(ListAPIView):
    serializer_class = ArticleListSerializer
    pagination_class = PaginationBy3

    def get_queryset(self):
        slug = self.kwargs['slug']
        qs = Article.objects.filter(tags__slug=slug).all()
        return qs


class CommentViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = ArticleComment.objects.all()
    serializer_class = CommentCreateUpdateDestroySerializer


class ReviewListView(ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewListSerializer
    pagination_class = PaginationBy3


class DoctorReviewListView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = ReviewListSerializer
    pagination_class = PaginationBy3

    def get_queryset(self):
        qs = Review.objects.filter(doctor__user_id=self.request.user.id).all()
        return qs


class PatientReviewViewSet(MultipleSerializerViewSetMixin, viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = ReviewListSerializer
    crud_serializer_class = ReviewCreateUpdateDestroySerializer
    pagination_class = PaginationBy3

    def get_queryset(self):
        qs = Review.objects.filter(patient__user_id=self.request.user.id).all()
        return qs


class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    pagination_class = PaginationBy3


class SupportQuestionViewSet(MultipleSerializerViewSetMixin, viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = SupportQuestionListSerializer
    crud_serializer_class = SupportQuestionCreateUpdateDestroySerializer
    pagination_class = PaginationBy3

    def get_queryset(self):
        qs = SupportQuestion.objects.filter(user_id=self.request.user.id).all()
        return qs
