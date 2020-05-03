from django.urls import path

from .views import DoctorListView, DoctorDetailView

app_name = 'staff'

urlpatterns = [
    path('doctor_list/', DoctorListView.as_view(), name='doctor_list'),
    path('doctor_detail/<slug>/', DoctorDetailView.as_view(), name='doctor_detail'),
]
