from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from rest_auth.views import PasswordResetView, PasswordResetConfirmView

from lk.views import ConfirmEmailView

urlpatterns = [
    path('rest-api/lk/', include('lk.urls')),
    path('rest-api/marketing/', include('marketing.urls')),
    path('rest-api/staff/', include('staff.urls')),
    path('rest-api/client/', include('client.urls')),
    path('rest-api/reception/', include('reception.urls')),
    path('admin/', admin.site.urls),
    path('rest-auth/registration/account-confirm-email/<key>/', ConfirmEmailView.as_view(),
         name='account_confirm_email'),
    path('rest-auth/password/reset/', PasswordResetView.as_view(),
         name='password_reset'),
    path('rest-auth/password/reset/confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(),
         name='password_reset_confirm'),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
