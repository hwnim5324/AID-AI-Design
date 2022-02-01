from django.urls import path, include
from .views import UserViewSet, DesignViewSet, UploadViewSet, ResultViewSet
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings

router = DefaultRouter()
router.register('users', UserViewSet)
router.register('upload', UploadViewSet, basename='upload')
router.register('designs', DesignViewSet, basename='designs')
router.register('results', ResultViewSet, basename='results')

app_name = 'api'

urlpatterns = [
    path('api/', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_URL)

