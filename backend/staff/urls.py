from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import (
    DoctorViewSet, DoctorByPostListView, DepartmentViewSet, PostViewSet,
    SearchDoctorListView, DoctorForFilterListView
)

app_name = 'staff'

urlpatterns = [
    path('api/doctors_by_post/<post_pk>/', DoctorByPostListView.as_view(),
         name='doctors_by_post'),
    path('api/search_doctors/<search_key>/', SearchDoctorListView.as_view(), name='search_doctors'),
    path('api/doctors_choice/', DoctorForFilterListView.as_view(), name='doctors_choice'),
]

router = DefaultRouter()
router.register(r'api/doctors', DoctorViewSet, basename='doctors')
router.register(r'api/departments', DepartmentViewSet, basename='departments')
router.register(r'api/posts', PostViewSet, basename='posts')
urlpatterns += router.urls
