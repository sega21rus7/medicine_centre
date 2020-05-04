from rest_framework.routers import DefaultRouter

from .views import DoctorViewSet

app_name = 'staff'

router = DefaultRouter()
router.register(r'api/doctors', DoctorViewSet, basename='doctors')
urlpatterns = router.urls
