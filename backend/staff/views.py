from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.pagination import PageNumberPagination

from backend.staff.serializers import DoctorSerializer
from .models import Doctor


class StandardPagination(PageNumberPagination):
    page_size = 3
    page_size_query_param = 'page_size'


class DoctorListView(ListAPIView):
    serializer_class = DoctorSerializer
    queryset = Doctor.objects.all()
    pagination_class = StandardPagination


class DoctorDetailView(RetrieveAPIView):
    serializer_class = DoctorSerializer
    queryset = Doctor.objects.all()
    lookup_field = 'slug'
