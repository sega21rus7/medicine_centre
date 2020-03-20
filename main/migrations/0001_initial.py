# Generated by Django 2.2.2 on 2020-03-19 10:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='InsurancePolicy',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.CharField(max_length=16, verbose_name='Номер')),
            ],
            options={
                'verbose_name': 'Полис ОМС',
                'verbose_name_plural': 'Полисы ОМС',
                'ordering': ('pk',),
            },
        ),
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Заголовок')),
                ('content', models.TextField(verbose_name='Содержание')),
                ('image', models.ImageField(upload_to='main/images/news', verbose_name='Изображение')),
            ],
            options={
                'verbose_name': 'Новость',
                'verbose_name_plural': 'Новости',
                'ordering': ('pk',),
            },
        ),
        migrations.CreateModel(
            name='Passport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('series', models.CharField(max_length=4, verbose_name='Серия')),
                ('number', models.CharField(max_length=6, verbose_name='Номер')),
            ],
            options={
                'verbose_name': 'Паспорт',
                'verbose_name_plural': 'Паспорта',
            },
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('insurance_policy', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='main.InsurancePolicy', verbose_name='Полис ОМС')),
                ('passport', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='main.Passport', verbose_name='Паспорт')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Пациент',
                'verbose_name_plural': 'Пациенты',
                'ordering': ('pk',),
            },
        ),
        migrations.CreateModel(
            name='Nurse',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('post', models.CharField(blank=True, max_length=100, null=True, verbose_name='Должность')),
                ('image', models.ImageField(upload_to='main/images/nurse', verbose_name='Фото')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Медсестра',
                'verbose_name_plural': 'Медсестры',
            },
        ),
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('post', models.CharField(blank=True, max_length=100, null=True, verbose_name='Должность')),
                ('image', models.ImageField(upload_to='main/images/doctor', verbose_name='Фото')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Врач',
                'verbose_name_plural': 'Врачи',
            },
        ),
    ]
