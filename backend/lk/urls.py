from rest_framework.routers import DefaultRouter

from .views import UserViewSet

app_name = 'lk'

router = DefaultRouter()
router.register(r'api/users', UserViewSet, basename='users')

urlpatterns = router.urls
