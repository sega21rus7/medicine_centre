from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from medicine_centre.paginators import StandardPagination
from medicine_centre.serializer_mixins import MultipleSerializerViewSetMixin
from .models import Reception
from .serializers import ReceptionCreateUpdateDestroySerializer, ReceptionListSerializer


class ReceptionViewSet(MultipleSerializerViewSetMixin, viewsets.ModelViewSet):
    queryset = Reception.objects.all()
    serializer_class = ReceptionListSerializer
    crud_serializer_class = ReceptionCreateUpdateDestroySerializer
    permission_classes = (IsAuthenticated,)
    pagination_class = StandardPagination
