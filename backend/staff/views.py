from pytils.translit import slugify
from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser

from medicine_centre.paginators import StandardPagination
from medicine_centre.serializer_mixins import MultipleSerializerViewSetMixin, MultiplePermissionsViewSetMixin
from .models import Doctor, Department, Post, WorkTime
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


class DoctorViewSet(MultipleSerializerViewSetMixin, MultiplePermissionsViewSetMixin, viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorListSerializer
    crud_serializer_class = DoctorCreateUpdateDestroySerializer
    serializer_permission_classes = (AllowAny,)
    crud_serializer_permission_classes = (IsAdminUser,)
    lookup_field = 'slug'
    pagination_class = StandardPagination


class PostViewSet(MultiplePermissionsViewSetMixin, viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    serializer_permission_classes = (AllowAny,)
    crud_serializer_permission_classes = (IsAdminUser,)


class DepartmentViewSet(MultipleSerializerViewSetMixin, MultiplePermissionsViewSetMixin,
                        viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentListSerializer
    crud_serializer_class = DepartmentCreateUpdateDestroySerializer
    serializer_permission_classes = (AllowAny,)
    crud_serializer_permission_classes = (IsAdminUser,)


class DoctorByPostListView(ListAPIView):
    serializer_class = DoctorListSerializer
    pagination_class = StandardPagination

    def get_queryset(self):
        post_pk = self.kwargs['post_pk']
        return Doctor.objects.filter(post_id=post_pk)



