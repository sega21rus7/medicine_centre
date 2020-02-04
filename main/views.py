from django.shortcuts import render
from django.views.generic.base import View

from user_profile.forms import SignInForm, SignUpForm


class IndexView(View):
    template_name = 'main/index.html'
    sign_in_form_class = SignInForm
    sign_up_form_class = SignUpForm

    def get(self, request):
        return render(request, self.template_name,
                      {'sign_in_form': self.sign_in_form_class, 'sign_up_form': self.sign_up_form_class})
