from django.contrib import admin

from .models import Reception


class ReceptionAdmin(admin.ModelAdmin):
    list_display = ('patient', 'doctor', 'date', 'from_time', 'to_time', 'confirmed_by_doctor')


admin.site.register(Reception, ReceptionAdmin)