from django.contrib import admin

from .models import CustomerUser


class CustomerUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'last_name', 'first_name', 'middle_name', 'role')


admin.site.register(CustomerUser, CustomerUserAdmin)