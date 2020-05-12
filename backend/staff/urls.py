from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import DoctorViewSet, DoctorByPostListView

app_name = 'staff'

urlpatterns = [
    path('api/doctors_by_department/<post_pk>/', DoctorByPostListView.as_view(),
         name='doctors_by_post'),
]

router = DefaultRouter()
router.register(r'api/doctors', DoctorViewSet, basename='doctors')
urlpatterns += router.urls
