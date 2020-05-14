from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from medicine_centre.paginators import StandardPagination
from medicine_centre.serializer_mixins import MultipleSerializerViewSetMixin
from .models import Patient
from .serializers import PatientListSerializer, PatientCreateUpdateDestroySerializer


class PatientViewSet(MultipleSerializerViewSetMixin, viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientListSerializer
    permission_classes = (IsAuthenticated,)
    serializer_action_classes = {
        'list': PatientListSerializer,
        'create': PatientCreateUpdateDestroySerializer,
        'update': PatientCreateUpdateDestroySerializer,
        'destroy': PatientCreateUpdateDestroySerializer,
    }
    pagination_class = StandardPagination
