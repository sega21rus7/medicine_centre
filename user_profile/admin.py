from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _

from user_profile.models import CustomerUser


admin.site.register(CustomerUser)
