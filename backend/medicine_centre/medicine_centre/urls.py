from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('main.urls')),
    path('lk/', include('lk.urls')),
    path('news/', include('news.urls')),
    path('staff/', include('staff.urls')),
    path('client/', include('client.urls')),
    path('accounts/', include('allauth.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls'))
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
