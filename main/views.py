from django.views.generic import DetailView
from django.views.generic.base import TemplateView

from .models import News, Doctor, BigNews


class IndexView(TemplateView):
    template_name = 'main/index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['news'] = News.objects.all()[:3]
        context['doctors'] = Doctor.objects.all()
        context['big_news'] = BigNews.objects.all()
        return context


class NewDetailView(DetailView):
    model = News
    template_name = 'main/new_detail.html'
    context_object_name = 'new'
