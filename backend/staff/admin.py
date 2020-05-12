from django.contrib import admin

from .models import Doctor, Post, Department, University, DiplomaSpecialty, \
    QualificationCategory, PrizeImage

admin.site.register(Doctor)
admin.site.register(Post)
admin.site.register(Department)
admin.site.register(University)
admin.site.register(DiplomaSpecialty)
admin.site.register(QualificationCategory)
admin.site.register(PrizeImage)
