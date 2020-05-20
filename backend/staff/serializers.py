from rest_framework import serializers

from lk.serializers import CustomerUserSerializer
from .models import Doctor, Post, Department, University, QualificationCategory, DiplomaSpecialty, PrizeImage, WorkTime


class DepartmentCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('name',)


class PostSerializer(serializers.ModelSerializer):
    department = DepartmentCreateUpdateDestroySerializer(read_only=True)

    class Meta:
        model = Post
        fields = ('pk', 'name', 'department', 'description', 'image',)


class DepartmentListSerializer(DepartmentCreateUpdateDestroySerializer):
    posts = PostSerializer(read_only=True, many=True)

    class Meta(DepartmentCreateUpdateDestroySerializer.Meta):
        fields = ('name', 'posts',)


class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = ('name',)


class DiplomaSpecialtySerializer(serializers.ModelSerializer):
    class Meta:
        model = DiplomaSpecialty
        fields = ('name',)


class QualificationCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = QualificationCategory
        fields = ('name',)


class PrizeImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PrizeImage
        fields = ('image',)


class DoctorCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ('pk', 'user', 'post', 'slug', 'experience_from', 'additional_education',
                  'university', 'diploma_specialty', 'qualification_category',
                  'awards', 'certificates', 'prize_images')


class DoctorListSerializer(DoctorCreateUpdateDestroySerializer):
    user = CustomerUserSerializer(read_only=True)
    post = PostSerializer(read_only=True)
    university = UniversitySerializer(read_only=True)
    diploma_specialty = DiplomaSpecialtySerializer(read_only=True)
    qualification_category = QualificationCategorySerializer(read_only=True)
    prize_images = PrizeImageSerializer(many=True, read_only=True)


class WorkTimeCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkTime
        fields = ('doctor', 'from_time', 'to_time', 'date', 'is_occupied',)


class WorkTimeListSerializer(WorkTimeCreateUpdateDestroySerializer):
    doctor = DoctorListSerializer(read_only=True)

    class Meta(WorkTimeCreateUpdateDestroySerializer.Meta):
        pass
