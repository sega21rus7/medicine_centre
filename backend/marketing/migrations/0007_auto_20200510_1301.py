# Generated by Django 2.2.10 on 2020-05-10 10:01

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('marketing', '0006_auto_20200510_1019'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articlecomment',
            name='content',
            field=ckeditor.fields.RichTextField(db_index=True, verbose_name='Содержание'),
        ),
    ]
