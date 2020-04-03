from django.contrib import admin

from .models import Passport, InsurancePolicy, Patient

admin.site.register(Passport)
admin.site.register(InsurancePolicy)
admin.site.register(Patient)
