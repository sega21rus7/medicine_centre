from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.pagination import PageNumberPagination

from .serializers import ArticleSerializer, NewsSerializer, \
    ArticleCommentSerializer, TagSerializer
from .models import Article, News, ArticleComment, Tag


class StandardPagination(PageNumberPagination):
    page_size = 3
    page_size_query_param = 'page_size'


class ArticleListView(ListAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    pagination_class = StandardPagination


class ArticleDetailView(RetrieveAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    lookup_field = 'slug'


class NewsListView(ListAPIView):
    serializer_class = NewsSerializer
    queryset = News.objects.all()
    pagination_class = StandardPagination


class NewsDetailView(RetrieveAPIView):
    serializer_class = NewsSerializer
    queryset = News.objects.all()
    lookup_field = 'slug'


class ArticleCommentListView(ListAPIView):
    serializer_class = ArticleCommentSerializer
    queryset = ArticleComment.objects.all()


class TagListView(ListAPIView):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()


class ArticleWithTagView(ArticleListView):
    def get_queryset(self):
        slug = self.kwargs['slug']
        qs = Article.objects.filter(tags__slug=slug).all()
        return qs
