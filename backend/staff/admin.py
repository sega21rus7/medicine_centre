from django.contrib import admin

from .models import Doctor, Post, Department, University, DiplomaSpecialty, \
    QualificationCategory, Office


class DoctorAdmin(admin.ModelAdmin):
    list_display = ('get_username', 'get_email', 'get_last_name', 'get_first_name', 'get_middle_name',)


class PostAdmin(admin.ModelAdmin):
    list_display = ('name', 'department',)


class OfficeAdmin(admin.ModelAdmin):
    list_display = ('number', 'floor',)


admin.site.register(Doctor, DoctorAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Department)
admin.site.register(University)
admin.site.register(DiplomaSpecialty)
admin.site.register(QualificationCategory)
admin.site.register(Office, OfficeAdmin)
