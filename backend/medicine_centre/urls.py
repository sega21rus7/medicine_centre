from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from rest_auth.registration.views import VerifyEmailView
from rest_auth.views import PasswordResetView, PasswordResetConfirmView

urlpatterns = [
    path('', include('main.urls')),
    path('lk/', include('lk.urls')),
    path('news/', include('news.urls')),
    path('staff/', include('staff.urls')),
    path('client/', include('client.urls')),
    path('accounts/', include('allauth.urls')),
    path('admin/', admin.site.urls),

    path('api/rest-auth/', include('rest_auth.urls')),
    path('api/rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api/rest-auth/registration/account-confirm-email/<key>/', VerifyEmailView.as_view(),
         name='account_confirm_email'),
    path('api/rest-auth/password/reset/', PasswordResetView.as_view(),
         name='password_reset'),
    path('api/rest-auth/password/reset/confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(),
         name='password_reset_confirm'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
