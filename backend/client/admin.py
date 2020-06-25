from django.contrib import admin

from .models import Patient


class PatientAdmin(admin.ModelAdmin):
    list_display = ('get_username', 'get_email', 'get_last_name', 'get_first_name', 'get_middle_name',)


admin.site.register(Patient, PatientAdmin)
