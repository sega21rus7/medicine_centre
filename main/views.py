from django.views.generic import DetailView, ListView
from django.views.generic.base import TemplateView

from .models import News, Doctor, BigNews

PAGINATOR_PAGES_COUNT = 3


class IndexView(TemplateView):
    template_name = 'main/index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['news'] = News.objects.all()[:3]
        context['doctors'] = Doctor.objects.all()[:3]
        context['big_news'] = BigNews.objects.all()[:3]
        return context


class NewsView(ListView):
    model = News
    template_name = 'main/news_list.html'
    context_object_name = 'news'
    paginate_by = 3


class BigNewsView(ListView):
    model = BigNews
    template_name = 'main/big_news_list.html'
    context_object_name = 'big_news'
    paginate_by = 3


class DoctorView(ListView):
    model = Doctor
    template_name = 'main/doctor_list.html'
    context_object_name = 'doctors'
    paginate_by = 3


class NewsDetailView(DetailView):
    model = News
    template_name = 'main/news_detail.html'
    context_object_name = 'new'


class BigNewsDetailView(DetailView):
    model = BigNews
    template_name = 'main/big_news_detail.html'
    context_object_name = 'big_new'


class DoctorDetailView(DetailView):
    model = Doctor
    template_name = 'main/doctor_detail.html'
    context_object_name = 'doctor'
