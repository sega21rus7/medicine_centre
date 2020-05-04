from rest_framework import serializers

from lk.serializers import CustomerUserSerializer
from .models import Doctor, Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('name',)


class DoctorListSerializer(serializers.ModelSerializer):
    user = CustomerUserSerializer(read_only=True)
    post = PostSerializer(read_only=True)

    class Meta:
        model = Doctor
        fields = ('user', 'post', 'slug',)


class DoctorCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ('user', 'post',)
