from rest_framework.generics import ListAPIView, RetrieveAPIView

from medicine_centre.paginators import StandardPagination
from .models import Article, News, ArticleComment, Tag
from .serializers import ArticleSerializer, NewsSerializer, \
    ArticleCommentSerializer, TagSerializer


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
