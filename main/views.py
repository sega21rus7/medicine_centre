from django.views.generic.base import TemplateView

from .models import News, Doctor, BigNews


class IndexView(TemplateView):
    template_name = 'main/index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['news'] = News.objects.all()
        context['doctors'] = Doctor.objects.all()
        context['big_news'] = BigNews.objects.all()
        return context
