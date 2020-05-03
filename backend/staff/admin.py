from django.contrib import admin

from .models import Doctor, Nurse, Post

admin.site.register(Doctor)
admin.site.register(Nurse)
admin.site.register(Post)