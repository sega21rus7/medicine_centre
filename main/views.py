from django.views.generic.base import TemplateView

from news.models import News, Article
from staff.models import Doctor


class IndexView(TemplateView):
    template_name = 'main/index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['news'] = News.objects.all()[:2]
        context['doctors'] = Doctor.objects.all()[:4]
        context['articles'] = Article.objects.all()[:3]
        return context


class AboutUsView(TemplateView):
    template_name = 'main/about_us.html'


class ContactsView(TemplateView):
    template_name = 'main/contacts.html'
