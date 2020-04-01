from django.views.generic import DetailView, ListView
from django.views.generic.base import TemplateView

from .models import News, Doctor, BigNews

PAGINATOR_PAGES_COUNT = 3


class IndexView(TemplateView):
    template_name = 'main/index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['news'] = News.objects.all()[:3]
        context['doctors'] = Doctor.objects.all()
        context['big_news'] = BigNews.objects.all()
        return context


class NewsView(ListView):
    model = News
    queryset = model.objects.all()
    template_name = 'main/news_list.html'
    context_object_name = 'news'
    paginate_by = 3


class NewsDetailView(DetailView):
    model = News
    template_name = 'main/news_detail.html'
    context_object_name = 'new'
