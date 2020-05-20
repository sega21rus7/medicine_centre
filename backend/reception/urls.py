from rest_framework.routers import DefaultRouter

from .views import ReceptionViewSet

app_name = 'reception'

router = DefaultRouter()
router.register(r'api/receptions', ReceptionViewSet, basename='receptions')
urlpatterns = router.urls
