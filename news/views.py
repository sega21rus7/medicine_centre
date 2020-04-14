from django.urls import reverse
from django.views.generic import ListView, DetailView
from django.views.generic.edit import FormMixin

from .forms import AddCommentForm
from .models import News, Article, Tag


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


class ArticleDetailView(FormMixin, DetailView):
    model = Article
    template_name = 'news/article_detail.html'
    context_object_name = 'article'
    form_class = AddCommentForm

    def get_success_url(self):
        return reverse('news:article_detail', kwargs={'slug': self.object.slug})

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['comments'] = self.object.comments.all()
        context['form'] = self.get_form()
        return context

    def form_valid(self, form):
        comment = form.save(commit=False)
        comment.article = self.get_object()
        comment.user = self.request.user
        comment.save()
        return super().form_valid(form)

    def post(self, request, *args, **kwargs):
        self.object = self.get_object()
        form = self.get_form()

        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)


class TagDetailView(DetailView):
    model = Tag
    template_name = 'news/tag_detail.html'
    context_object_name = 'tag'
