from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from medicine_centre.paginators import StandardPagination
from medicine_centre.serializer_mixins import MultipleSerializerViewSetMixin
from .models import News, Article, Tag, ArticleComment
from .serializers import NewsSerializer, ArticleListSerializer, \
    ArticleCreateUpdateDestroySerializer, TagSerializer, ArticleCommentSerializer


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


class ArticleCommentListView(ListAPIView):
    serializer_class = ArticleCommentSerializer
    queryset = ArticleComment.objects.all()


class ArticleCommentViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]

    queryset = ArticleComment.objects.all()
    serializer_class = ArticleCommentSerializer
