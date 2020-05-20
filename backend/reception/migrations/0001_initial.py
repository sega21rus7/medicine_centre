# Generated by Django 2.2.10 on 2020-05-20 09:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('client', '0001_initial'),
        ('staff', '0002_worktime'),
    ]

    operations = [
        migrations.CreateModel(
            name='Office',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.CharField(max_length=3, verbose_name='Номер')),
                ('floor', models.CharField(max_length=1, verbose_name='Этаж')),
            ],
            options={
                'verbose_name': 'Кабинет',
                'verbose_name_plural': 'Кабинеты',
            },
        ),
        migrations.CreateModel(
            name='Reception',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('doctor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='receptions', to='staff.Doctor', verbose_name='Врач')),
                ('office', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='offices', to='reception.Office', verbose_name='Кабинет')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='receptions', to='client.Patient', verbose_name='Пациент')),
                ('work_time', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='receptions', to='staff.WorkTime', verbose_name='Время приема')),
            ],
            options={
                'verbose_name': 'Прием',
                'verbose_name_plural': 'Приемы',
            },
        ),
    ]
