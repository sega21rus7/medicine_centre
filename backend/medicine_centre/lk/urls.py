from django.urls import path, include

from . import views

app_name = 'lk'

urlpatterns = [
    path('', views.IndexView.as_view(), name="index"),
    path('api/', include('lk.api.urls'))
]
