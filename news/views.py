from django.db.models import Q
from django.views.generic import ListView, DetailView

from .models import News, Article


class SearchListView(ListView):
    pass
    # def get_queryset(self):
    #     search = self.request.GET.get('search', '')
    #     if search:
    #         news = self.model.objects.filter(Q(title__icontains=search) |
    #                                          Q(content__contains=search))
    #     else:
    #         news = self.model.objects.all()
    #     return news


class NewsView(SearchListView):
    model = News
    template_name = 'news/news_list.html'
    context_object_name = 'news'
    paginate_by = 2


class ArticleView(SearchListView):
    model = Article
    template_name = 'news/article_list.html'
    context_object_name = 'articles'
    paginate_by = 3


class NewsDetailView(DetailView):
    model = News
    template_name = 'news/news_detail.html'
    context_object_name = 'new'


class ArticleDetailView(DetailView):
    model = Article
    template_name = 'news/article_detail.html'
    context_object_name = 'article'
