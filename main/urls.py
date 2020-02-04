from django.conf.urls import url
from django.conf.urls.static import static

from medicine_centre import settings
from . import views

urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name="index"),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
