from django.conf.urls import url
from django.conf.urls.static import static

from medicine_centre import settings
from . import views

app_name = 'main'

urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name="index"),
    url(r'big_news_list/$', views.BigNewsView.as_view(), name='big_news_list'),
    url(r'news_list/$', views.NewsView.as_view(), name='news_list'),
    url(r'doctor_list/$', views.DoctorView.as_view(), name='doctor_list'),

    url(r'big_news_list/(?P<slug>[-\w]+)$', views.BigNewsDetailView.as_view(), name='big_news_detail'),
    url(r'news_list/(?P<slug>[-\w]+)$', views.NewsDetailView.as_view(), name='news_detail'),
    url(r'doctor_list/(?P<slug>[-\w]+)$', views.DoctorDetailView.as_view(), name='doctor_detail'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
