import datetime

from django.db.models import Q
from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from medicine_centre.paginators import PaginationBy10
from medicine_centre.serializer_mixins import MultipleSerializerViewSetMixin
from .models import Reception
from .serializers import ReceptionCreateUpdateDestroySerializer, ReceptionListSerializer


class ReceptionViewSet(MultipleSerializerViewSetMixin, viewsets.ModelViewSet):
    queryset = Reception.objects.all()
    serializer_class = ReceptionListSerializer
    crud_serializer_class = ReceptionCreateUpdateDestroySerializer
    permission_classes = (IsAuthenticated,)
    pagination_class = PaginationBy10


class ReceptionByDoctorListView(ListAPIView):
    serializer_class = ReceptionListSerializer
    permission_classes = (IsAuthenticated,)
    pagination_class = PaginationBy10

    def get_queryset(self):
        doctor_pk = self.kwargs['doctor_pk']
        qs = Reception.objects.filter(doctor_id=doctor_pk).all()
        # также фильтруем по дате и времени, чтобы не выводить архивные записи
        now = datetime.datetime.now()
        qs = qs.filter(Q(date__gt=now.date()) |
                       (Q(date=now.date()) & Q(from_time__gt=now.time()))
                       )
        return qs


class ArchiveReceptionByDoctorListView(ReceptionByDoctorListView):
    def get_queryset(self):
        doctor_pk = self.kwargs['doctor_pk']
        qs = Reception.objects.filter(doctor_id=doctor_pk).all()
        # выводим архивные записи
        now = datetime.datetime.now()
        qs = qs.filter(Q(date__lt=now.date()) |
                       (Q(date=now.date()) & Q(from_time__lt=now.time()))
                       )
        return qs


class ReceptionByPatientListView(ListAPIView):
    serializer_class = ReceptionListSerializer
    permission_classes = (IsAuthenticated,)
    pagination_class = PaginationBy10

    def get_queryset(self):
        patient_pk = self.kwargs['patient_pk']
        qs = Reception.objects.filter(patient_id=patient_pk).all()
        # также фильтруем по дате и времени, чтобы не выводить архивные записи
        now = datetime.datetime.now()
        qs = qs.filter(Q(date__gt=now.date()) |
                       (Q(date=now.date()) & Q(from_time__gt=now.time()))
                       )
        return qs


class ArchiveReceptionByPatientListView(ReceptionByPatientListView):
    def get_queryset(self):
        patient_pk = self.kwargs['patient_pk']
        qs = Reception.objects.filter(patient_id=patient_pk).all()
        # выводим архивные записи
        now = datetime.datetime.now()
        qs = qs.filter(Q(date__lt=now.date()) |
                       (Q(date=now.date()) & Q(from_time__lt=now.time()))
                       )
        return qs


class FreeReceptionListView(ListAPIView):
    serializer_class = ReceptionListSerializer
    permission_classes = (IsAuthenticated,)
    pagination_class = PaginationBy10

    def get_queryset(self):
        qs = Reception.objects.filter(patient__isnull=True).all()
        # также фильтруем по дате и времени, чтобы не выводить архивные записи
        now = datetime.datetime.now()
        qs = qs.filter(Q(date__gt=now.date()) |
                       (Q(date=now.date()) & Q(from_time__gt=now.time()))
                       )
        return qs


class FreeReceptionByPostListView(FreeReceptionListView):
    def get_queryset(self):
        post_pk = self.kwargs['post_pk']
        qs = super(FreeReceptionByPostListView, self).get_queryset()
        qs = qs.filter(doctor__posts__id__icontains=post_pk)
        return qs
