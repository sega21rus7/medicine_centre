from django.contrib import admin

from .models import Doctor, Nurse, Passport, InsurancePolicy, Patient, News, BigNews, Post

admin.site.register(Doctor)
admin.site.register(Nurse)
admin.site.register(Passport)
admin.site.register(InsurancePolicy)
admin.site.register(Patient)
admin.site.register(News)
admin.site.register(BigNews)
admin.site.register(Post)