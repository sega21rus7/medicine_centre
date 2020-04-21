from django.contrib.auth import logout
from django.shortcuts import redirect
from django.urls import reverse
from django.views.generic.base import View


class SignOutView(View):
    def get(self, request):
        logout(request)
        return redirect(reverse('main:index'))
