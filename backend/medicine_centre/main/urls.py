from django.conf.urls import url
from . import views

app_name = 'main'

urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name="index"),
    url(r'about_us/$', views.AboutUsView.as_view(), name="about_us"),
    url(r'contacts/$', views.ContactsView.as_view(), name="contacts"),
]
