from oauthlib.uri_validate import path
from rest_framework.routers import DefaultRouter

from .views import ReceptionViewSet, ReceptionByDoctorListView

app_name = 'reception'

urlpatterns = [
    path('api/receptions_by_doctor/<doctor_pk>/', ReceptionByDoctorListView.as_view(),
         name='receptions_by_doctor'),
]

router = DefaultRouter()

router.register(r'api/receptions', ReceptionViewSet, basename='receptions')
urlpatterns += router.urls
