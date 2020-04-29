from django.urls import path

from .views import DoctorListView, DoctorDetailView

urlpatterns = [
    path('doctor_list/', DoctorListView.as_view(), name='doctor_list_api'),
    path('doctor_detail/<slug>/', DoctorDetailView.as_view(), name='doctor_detail_api'),
]
