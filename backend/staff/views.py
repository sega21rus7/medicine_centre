from rest_framework import viewsets
from rest_framework.generics import ListAPIView

from medicine_centre.paginators import StandardPagination
from medicine_centre.serializer_mixins import MultipleSerializerViewSetMixin
from .models import Doctor
from .serializers import DoctorListSerializer, DoctorCreateUpdateDestroySerializer


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


class DoctorByPostListView(ListAPIView):
    serializer_class = DoctorListSerializer
    pagination_class = StandardPagination

    def get_queryset(self):
        post_pk = self.kwargs['post_pk']
        return Doctor.objects.filter(post_id=post_pk)
