from rest_framework import serializers

from backend.medicine_centre.lk.api.serializers import CustomerUserSerializer
from ..models import Doctor, Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('name',)


class DoctorSerializer(serializers.ModelSerializer):
    user = CustomerUserSerializer()
    post = PostSerializer(read_only=True)

    class Meta:
        model = Doctor
        fields = ('user', 'post', 'slug',)
