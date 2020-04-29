from rest_framework.generics import ListAPIView, RetrieveAPIView

from .serializers import DoctorSerializer
from ..models import Doctor


class DoctorListView(ListAPIView):
    serializer_class = DoctorSerializer
    queryset = Doctor.objects.all()


class DoctorDetailView(RetrieveAPIView):
    serializer_class = DoctorSerializer
    queryset = Doctor.objects.all()
    lookup_field = 'slug'
