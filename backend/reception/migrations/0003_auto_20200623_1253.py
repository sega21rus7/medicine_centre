# Generated by Django 2.2.10 on 2020-06-23 09:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reception', '0002_auto_20200616_1053'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reception',
            name='date',
            field=models.DateField(verbose_name='Дата'),
        ),
        migrations.AlterField(
            model_name='reception',
            name='doctor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='receptions', to='staff.Doctor', verbose_name='Врач'),
        ),
        migrations.AlterField(
            model_name='reception',
            name='from_time',
            field=models.TimeField(verbose_name='C'),
        ),
        migrations.AlterField(
            model_name='reception',
            name='to_time',
            field=models.TimeField(verbose_name='До'),
        ),
    ]
