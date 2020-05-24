from rest_framework import viewsets
from rest_framework.generics import ListAPIView
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


class ReceptionByDoctorListView(ListAPIView):
    serializer_class = ReceptionListSerializer
    permission_classes = (IsAuthenticated,)
    pagination_class = StandardPagination

    def get_queryset(self):
        doctor_pk = self.kwargs['doctor_pk']
        qs = Reception.objects.filter(doctor_id=doctor_pk).all()
        return qs


class ReceptionByPatientListView(ListAPIView):
    serializer_class = ReceptionListSerializer
    permission_classes = (IsAuthenticated,)
    pagination_class = StandardPagination

    def get_queryset(self):
        patient_pk = self.kwargs['patient_pk']
        qs = Reception.objects.filter(patient_id=patient_pk).all()
        return qs


class FreeReceptionListView(ListAPIView):
    serializer_class = ReceptionListSerializer
    permission_classes = (IsAuthenticated,)
    pagination_class = StandardPagination

    def get_queryset(self):
        qs = Reception.objects.filter(patient__isnull=True).all()
        return qs
