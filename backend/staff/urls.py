from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import (
    DoctorViewSet, DoctorByPostListView, DepartmentViewSet, PostViewSet,
    DoctorSearchListView, DoctorForFilterListView, DoctorByPostSearchListView
)

app_name = 'staff'

urlpatterns = [
    path('doctors_by_post/<post_pk>/', DoctorByPostListView.as_view(),
         name='doctors_by_post'),
    path('doctors/search/<search_key>/', DoctorSearchListView.as_view(), name='doctors_search'),
    path('doctors_by_post/<post_pk>/search/<search_key>/', DoctorByPostSearchListView.as_view(),
         name='doctors_by_post_search'),
    path('doctors_choice/', DoctorForFilterListView.as_view(), name='doctors_choice'),
]

router = DefaultRouter()
router.register(r'doctors', DoctorViewSet, basename='doctors')
router.register(r'departments', DepartmentViewSet, basename='departments')
router.register(r'posts', PostViewSet, basename='posts')
urlpatterns += router.urls
