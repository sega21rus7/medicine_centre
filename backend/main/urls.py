from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.IndexView.as_view(), name="index"),
    path('about_us/', views.AboutUsView.as_view(), name="about_us"),
    path('contacts/', views.ContactsView.as_view(), name="contacts"),
]
