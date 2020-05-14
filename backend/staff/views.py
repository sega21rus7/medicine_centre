from pytils.translit import slugify
from rest_framework import viewsets
from rest_framework.generics import ListAPIView

from medicine_centre.paginators import StandardPagination
from medicine_centre.serializer_mixins import MultipleSerializerViewSetMixin
from .models import Doctor, Department, Post
from .serializers import DoctorListSerializer, DoctorCreateUpdateDestroySerializer, \
    DepartmentCreateUpdateDestroySerializer, DepartmentListSerializer, PostSerializer


class SearchDoctorListView(ListAPIView):
    serializer_class = DoctorListSerializer
    pagination_class = StandardPagination

    def get_queryset(self):
        search_key = self.kwargs['search_key']
        slugify_key = slugify(search_key)
        qs = Doctor.objects.filter(slug__icontains=slugify_key).all()
        return qs


class DoctorViewSet(MultipleSerializerViewSetMixin, viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    list_serializer_class = DoctorListSerializer
    crud_serializer_class = DoctorCreateUpdateDestroySerializer
    lookup_field = 'slug'
    pagination_class = StandardPagination


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class DepartmentViewSet(MultipleSerializerViewSetMixin, viewsets.ModelViewSet):
    queryset = Department.objects.all()
    list_serializer_class = DepartmentListSerializer
    crud_serializer_class = DepartmentCreateUpdateDestroySerializer


class DoctorByPostListView(ListAPIView):
    serializer_class = DoctorListSerializer
    pagination_class = StandardPagination

    def get_queryset(self):
        post_pk = self.kwargs['post_pk']
        return Doctor.objects.filter(post_id=post_pk)
