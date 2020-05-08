# Generated by Django 2.2.10 on 2020-05-08 09:50

import ckeditor.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import smartfields.fields
import smartfields.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('client', '0001_initial'),
        ('staff', '0002_auto_20200508_1144'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(db_index=True, max_length=150, unique=True, verbose_name='Заголовок')),
                ('content', ckeditor.fields.RichTextField(db_index=True, verbose_name='Содержание')),
                ('pub_date', models.DateTimeField(auto_now_add=True)),
                ('slug', models.SlugField(blank=True, max_length=150, unique=True)),
                ('image', smartfields.fields.ImageField(blank=True, upload_to='marketing/images/articles', verbose_name='Изображение')),
            ],
            options={
                'verbose_name': 'Статья',
                'verbose_name_plural': 'Статьи',
                'ordering': ('-pub_date',),
                'abstract': False,
            },
            bases=(smartfields.models.SmartfieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pub_date', models.DateTimeField(blank=True, verbose_name='Дата публикации')),
                ('last_change_date', models.DateTimeField(blank=True, null=True, verbose_name='Дата последнего изменения')),
                ('content', ckeditor.fields.RichTextField(db_index=True, verbose_name='Содержание')),
                ('email', models.EmailField(db_index=True, max_length=254, verbose_name='Email address')),
            ],
            options={
                'verbose_name': 'Обратная связь',
                'verbose_name_plural': 'Обратная связь',
                'ordering': ('-pub_date',),
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(db_index=True, max_length=150, unique=True, verbose_name='Заголовок')),
                ('content', ckeditor.fields.RichTextField(db_index=True, verbose_name='Содержание')),
                ('pub_date', models.DateTimeField(auto_now_add=True)),
                ('slug', models.SlugField(blank=True, max_length=150, unique=True)),
                ('image', smartfields.fields.ImageField(blank=True, upload_to='marketing/images/news', verbose_name='Изображение')),
            ],
            options={
                'verbose_name': 'Новость',
                'verbose_name_plural': 'Новости',
                'ordering': ('-pub_date',),
                'abstract': False,
            },
            bases=(smartfields.models.SmartfieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(db_index=True, max_length=50, unique=True, verbose_name='Заголовок')),
                ('slug', models.SlugField(blank=True, unique=True)),
            ],
            options={
                'verbose_name': 'Тег',
                'verbose_name_plural': 'Теги',
                'ordering': ('title',),
            },
        ),
        migrations.CreateModel(
            name='SupportQuestion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pub_date', models.DateTimeField(blank=True, verbose_name='Дата публикации')),
                ('last_change_date', models.DateTimeField(blank=True, null=True, verbose_name='Дата последнего изменения')),
                ('content', ckeditor.fields.RichTextField(db_index=True, verbose_name='Содержание')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='client.Patient', verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Вопрос в техподдержку',
                'verbose_name_plural': 'Вопросы в техподдержку',
                'ordering': ('-pub_date',),
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pub_date', models.DateTimeField(blank=True, verbose_name='Дата публикации')),
                ('last_change_date', models.DateTimeField(blank=True, null=True, verbose_name='Дата последнего изменения')),
                ('content', ckeditor.fields.RichTextField(db_index=True, verbose_name='Содержание')),
                ('doctors', models.ManyToManyField(blank=True, related_name='reviews', to='staff.Doctor', verbose_name='Врачи')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='client.Patient', verbose_name='Клиент')),
            ],
            options={
                'verbose_name': 'Отзыв',
                'verbose_name_plural': 'Отзывы',
                'ordering': ('-pub_date',),
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='ArticleComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pub_date', models.DateTimeField(blank=True, verbose_name='Дата публикации')),
                ('last_change_date', models.DateTimeField(blank=True, null=True, verbose_name='Дата последнего изменения')),
                ('content', ckeditor.fields.RichTextField(db_index=True, verbose_name='Содержание')),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='marketing.Article', verbose_name='Статья')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Комментарий',
                'verbose_name_plural': 'Комментарии',
                'ordering': ('-pub_date',),
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='article',
            name='tags',
            field=models.ManyToManyField(blank=True, related_name='articles', to='marketing.Tag', verbose_name='Теги'),
        ),
    ]
