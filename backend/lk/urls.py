from django.urls import path, include

from . import views

app_name = 'lk'

urlpatterns = [
    path('api/', include('lk.urls'))
]
