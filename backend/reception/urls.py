from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import ReceptionViewSet, ReceptionByDoctorListView, ReceptionByPatientListView, \
    FreeReceptionListView

app_name = 'reception'

urlpatterns = [
    path('api/receptions_by_doctor/<doctor_pk>/', ReceptionByDoctorListView.as_view(),
         name='receptions_by_doctor'),
    path('api/receptions_by_patient/<patient_pk>/', ReceptionByPatientListView.as_view(),
         name='receptions_by_patient'),
    path('api/free_receptions/', FreeReceptionListView.as_view(),
         name='free_receptions'),
]

router = DefaultRouter()
router.register(r'api/receptions', ReceptionViewSet, basename='receptions')
urlpatterns += router.urls
