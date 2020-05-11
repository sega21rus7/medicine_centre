# Generated by Django 2.2.10 on 2020-05-11 08:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('marketing', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='doctors',
            field=models.ManyToManyField(blank=True, null=True, related_name='reviews', to='staff.Doctor', verbose_name='Врачи'),
        ),
    ]