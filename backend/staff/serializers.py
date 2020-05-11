from rest_framework import serializers

from lk.serializers import CustomerUserSerializer
from .models import Doctor, Post, Department, University, QualificationCategory, DiplomaSpecialty, Award, Certificate


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('name',)


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('name',)


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


class AwardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Award
        fields = ('name', 'image',)


class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields = ('name', 'image',)


class DoctorCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ('user', 'post', 'slug', 'experience_from', 'department', 'additional_education',
                  'university', 'diploma_specialty', 'qualification_category',
                  'awards', 'certificates')


class DoctorListSerializer(DoctorCreateUpdateDestroySerializer):
    user = CustomerUserSerializer()
    post = PostSerializer()
    department = DepartmentSerializer()
    university = UniversitySerializer()
    diploma_specialty = DiplomaSpecialtySerializer()
    qualification_category = QualificationCategorySerializer()
