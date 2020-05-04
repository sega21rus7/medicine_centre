from rest_framework import serializers

from .models import News, Tag, Article, ArticleComment


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ('title', 'content', 'pub_date', 'slug', 'image',)


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('title', 'slug',)


class ArticleListSerializer(serializers.ModelSerializer):
    tags = TagSerializer(read_only=True, many=True)

    class Meta:
        model = Article
        fields = ('title', 'content', 'pub_date', 'slug', 'image', 'tags',)


class ArticleCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('title', 'content', 'pub_date', 'slug', 'image', 'tags',)


class ArticleCommentSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = ArticleComment
        fields = ('user', 'article', 'pub_date', 'content',)
