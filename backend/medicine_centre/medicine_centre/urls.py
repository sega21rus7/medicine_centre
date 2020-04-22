from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin

from medicine_centre import settings

urlpatterns = [
    url(r'', include('main.urls')),
    url(r'user_profile/', include('user_profile.urls')),
    url(r'news/', include('news.urls')),
    url(r'staff/', include('staff.urls')),
    url(r'client/', include('client.urls')),
    url(r'lk/', include('lk.urls')),
    url(r'accounts/', include('allauth.urls')),
    url(r'admin/', admin.site.urls),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
