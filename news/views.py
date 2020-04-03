from django.views.generic import ListView, DetailView

from .models import News, BigNews


class NewsView(ListView):
    model = News
    template_name = 'news/news_list.html'
    context_object_name = 'news'
    paginate_by = 6


class BigNewsView(ListView):
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
