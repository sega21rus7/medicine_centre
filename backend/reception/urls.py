from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import ReceptionViewSet, ReceptionByDoctorListView, ReceptionByPatientListView, \
    FreeReceptionListView, FreeReceptionByPostListView, ArchiveReceptionByDoctorListView, \
    ArchiveReceptionByPatientListView

app_name = 'reception'

urlpatterns = [
    path('receptions_by_doctor/<doctor_pk>/', ReceptionByDoctorListView.as_view(), name='receptions_by_doctor'),
    path('archive_receptions_by_doctor/<doctor_pk>/', ArchiveReceptionByDoctorListView.as_view(),
         name='archive_receptions_by_doctor'),
    path('receptions_by_patient/<patient_pk>/', ReceptionByPatientListView.as_view(), name='receptions_by_patient'),
    path('archive_receptions_by_patient/<patient_pk>/', ArchiveReceptionByPatientListView.as_view(),
         name='archive_receptions_by_patient'),
    path('free_receptions/', FreeReceptionListView.as_view(), name='free_receptions'),
    path('free_receptions_by_post/<post_pk>/', FreeReceptionByPostListView.as_view(),
         name='free_receptions_by_post'),
]

router = DefaultRouter()
router.register(r'receptions', ReceptionViewSet, basename='receptions')
urlpatterns += router.urls
