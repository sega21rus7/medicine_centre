from django.db.models import Q
from django.views.generic import ListView, DetailView

from .models import News, BigNews


class SearchListView(ListView):
    def get_queryset(self):
        search = self.request.GET.get('search', '')
        if search:
            news = self.model.objects.filter(Q(title__icontains=search) |
                                             Q(content__contains=search))
        else:
            news = self.model.objects.all()
        return news


class NewsView(SearchListView):
    model = News
    template_name = 'news/news_list.html'
    context_object_name = 'news'
    paginate_by = 6


class BigNewsView(SearchListView):
    model = BigNews
    template_name = 'news/big_news_list.html'
    context_object_name = 'big_news'
    paginate_by = 3


class NewsDetailView(DetailView):
    model = News
    template_name = 'news/news_detail.html'
    context_object_name = 'new'


class BigNewsDetailView(DetailView):
    model = BigNews
    template_name = 'news/big_news_detail.html'
    context_object_name = 'big_new'
