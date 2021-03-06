from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from medicine_centre.paginators import PaginationBy3
from medicine_centre.serializer_mixins import MultipleSerializerViewSetMixin
from .models import Patient
from .serializers import PatientListSerializer, PatientCreateUpdateDestroySerializer


class PatientViewSet(MultipleSerializerViewSetMixin, viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientListSerializer
    crud_serializer_class = PatientCreateUpdateDestroySerializer
    permission_classes = (IsAuthenticated,)
    pagination_class = PaginationBy3
