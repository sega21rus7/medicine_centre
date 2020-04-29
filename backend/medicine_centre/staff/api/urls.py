from django.urls import path

from .views import DoctorShortListView, DoctorListView, DoctorDetailView

urlpatterns = [
    path('doctor_short_list/', DoctorShortListView.as_view(), name='doctor_short_list_api'),
    path('doctor_list/', DoctorListView.as_view(), name='doctor_list_api'),
    path('doctor_detail/<slug>/', DoctorDetailView.as_view(), name='doctor_detail_api'),
]
