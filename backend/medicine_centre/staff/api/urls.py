from django.urls import path

from .views import DoctorShortListView, DoctorDetailView

urlpatterns = [
    path('doctor_short_list/', DoctorShortListView.as_view(), name='doctor_list_api'),
    path('doctor_detail/<slug>/', DoctorDetailView.as_view(), name='doctor_detail_api'),
]
