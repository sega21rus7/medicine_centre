# Generated by Django 2.2.2 on 2020-04-26 09:59

from django.db import migrations
import smartfields.fields


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0002_auto_20200426_1256'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='image',
            field=smartfields.fields.ImageField(upload_to='news/images/articles', verbose_name='Изображение'),
        ),
    ]
