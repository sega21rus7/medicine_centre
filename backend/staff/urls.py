from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import DoctorViewSet, DoctorByDepartmentListView

app_name = 'staff'

urlpatterns = [
    path('api/doctors_by_department/<department_pk>/', DoctorByDepartmentListView.as_view(),
         name='doctors_by_department'),
]

router = DefaultRouter()
router.register(r'api/doctors', DoctorViewSet, basename='doctors')
urlpatterns += router.urls
