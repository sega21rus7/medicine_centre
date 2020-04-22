from django.urls import path
from . import views

app_name = 'staff'

urlpatterns = [
    path('doctor_list', views.DoctorView.as_view(), name='doctor_list'),
    path('doctor_list/<str:slug>/', views.DoctorDetailView.as_view(), name='doctor_detail'),
]
