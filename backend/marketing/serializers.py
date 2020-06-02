import datetime

from django.db.models import Q
from rest_framework import serializers

from client.serializers import PatientListSerializer
from lk.serializers import CustomerUserSerializer
from medicine_centre.serializer_fields import CurrentPatientDefault
from reception.models import Reception
from staff.serializers import DoctorListSerializer
from .models import News, Tag, Article, ArticleComment, Review, Feedback, SupportQuestion


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ('title', 'content', 'pub_date', 'slug', 'image',)


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('title', 'slug',)


class CommentCreateUpdateDestroySerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = ArticleComment
        fields = ('user', 'article', 'content',)


class CommentListSerializer(serializers.ModelSerializer):
    user = CustomerUserSerializer(read_only=True)

    class Meta:
        model = ArticleComment
        fields = ('user', 'pub_date', 'content',)


class ArticleListSerializer(serializers.ModelSerializer):
    tags = TagSerializer(read_only=True, many=True)
    comments = CommentListSerializer(read_only=True, many=True)

    class Meta:
        model = Article
        fields = ('pk', 'title', 'content', 'pub_date', 'slug', 'image', 'tags', 'comments',)


class ArticleCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('title', 'content', 'image', 'tags',)


class ReviewCreateUpdateDestroySerializer(serializers.ModelSerializer):
    patient = serializers.HiddenField(default=CurrentPatientDefault())

    class Meta:
        model = Review
        fields = ('pk', 'patient', 'pub_date', 'last_change_date', 'positives', 'negatives', 'content', 'doctor')

    def validate(self, attrs):
        now = datetime.datetime.now()
        patient = attrs['patient']
        doctor = attrs['doctor']
        if doctor:
            reception = Reception.objects.filter(
                Q(patient=patient) &
                Q(doctor=doctor) &
                (Q(date__lt=now.date()) |
                 (Q(date=now.date()) & Q(from_time__lt=now.time())))
            ).exists()
            if not reception:
                raise serializers.ValidationError(
                    'Вы не были на приеме у данного врача, поэтому не можете оставить отзыв о его работе.')
        return attrs


class ReviewListSerializer(ReviewCreateUpdateDestroySerializer):
    patient = PatientListSerializer(read_only=True)
    doctor = DoctorListSerializer(read_only=True)


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ('name', 'email', 'pub_date', 'last_change_date', 'content',)


class SupportQuestionCreateUpdateDestroySerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = SupportQuestion
        fields = ('user', 'pub_date', 'last_change_date', 'content',)


class SupportQuestionListSerializer(SupportQuestionCreateUpdateDestroySerializer):
    user = CustomerUserSerializer(read_only=True)

    class Meta(SupportQuestionCreateUpdateDestroySerializer.Meta):
        fields = ('pk', 'user', 'pub_date', 'last_change_date', 'content', 'answer')
