from rest_framework import viewsets
from rest_framework.generics import ListAPIView

from medicine_centre.paginators import StandardPagination
from medicine_centre.serializer_mixins import MultipleSerializerViewSetMixin
from .models import Doctor, Department
from .serializers import DoctorListSerializer, DoctorCreateUpdateDestroySerializer, DepartmentSerializer


class DoctorViewSet(MultipleSerializerViewSetMixin, viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorListSerializer
    lookup_field = 'slug'
    serializer_action_classes = {
        'list': DoctorListSerializer,
        'create': DoctorCreateUpdateDestroySerializer,
        'update': DoctorCreateUpdateDestroySerializer,
        'destroy': DoctorCreateUpdateDestroySerializer,
    }
    pagination_class = StandardPagination


class DepartmentViewSet(MultipleSerializerViewSetMixin, viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class DoctorByPostListView(ListAPIView):
    serializer_class = DoctorListSerializer
    pagination_class = StandardPagination

    def get_queryset(self):
        post_pk = self.kwargs['post_pk']
        return Doctor.objects.filter(post_id=post_pk)
