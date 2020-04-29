from rest_framework.generics import ListAPIView, RetrieveAPIView

from .serializers import ArticleSerializer, NewsSerializer, \
    ArticleCommentSerializer, TagSerializer
from ..models import Article, News, ArticleComment, Tag


class ArticleListView(ListAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()


class ArticleShortListView(ArticleListView):
    def get_queryset(self):
        qs = super(ArticleShortListView, self).get_queryset()
        return qs[:3]


class ArticleDetailView(RetrieveAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    lookup_field = 'slug'


class NewsListView(ListAPIView):
    serializer_class = NewsSerializer
    queryset = News.objects.all()


class NewsShortListView(NewsListView):
    def get_queryset(self):
        qs = super(NewsShortListView, self).get_queryset()
        return qs[:3]


class NewsDetailView(RetrieveAPIView):
    serializer_class = NewsSerializer
    queryset = News.objects.all()
    lookup_field = 'slug'


class ArticleCommentListView(ListAPIView):
    serializer_class = ArticleCommentSerializer
    queryset = ArticleComment.objects.all()


class TagDetailView(RetrieveAPIView):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()
    lookup_field = 'slug'
