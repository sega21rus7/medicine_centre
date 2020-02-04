from django.shortcuts import render
from django.views.generic.base import View

from user_profile.forms import SignInForm


class SignInView(View):
    template_name = 'user_profile/sign_in.html'
    form_class = SignInForm

    # def get(self, request):
    #     return render(request, self.template_name, {'form': self.form_class})
