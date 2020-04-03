from django.conf.urls import url
from . import views

app_name = 'staff'

urlpatterns = [
    url(r'doctor_list/$', views.DoctorView.as_view(), name='doctor_list'),
    url(r'doctor_list/(?P<slug>[-\w]+)$', views.DoctorDetailView.as_view(), name='doctor_detail'),
]
