from rest_framework.routers import DefaultRouter

from .views import ClientViewSet

app_name = 'client'

router = DefaultRouter()
router.register(r'api/patients', ClientViewSet, basename='patients')
urlpatterns = router.urls
