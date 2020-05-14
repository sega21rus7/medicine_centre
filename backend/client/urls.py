from rest_framework.routers import DefaultRouter

from .views import PatientViewSet

app_name = 'client'

router = DefaultRouter()
router.register(r'api/patients', PatientViewSet, basename='patients')
urlpatterns = router.urls
