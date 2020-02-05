from django.http import JsonResponse
from django.template.loader import render_to_string
from django.views.generic.base import View

from .forms import SignUpForm, SignInForm


class SignUpView(View):
    form_class = SignUpForm
    template_name = 'user_profile/sign_up.html'

    def get(self, request):
        context = {'form': self.form_class}
        html_form = render_to_string(template_name=self.template_name, context=context, request=request)
        return JsonResponse({'html_form': html_form})


class SignInView(View):
    form_class = SignInForm
    template_name = 'user_profile/sign_in.html'

    def get(self, request):
        context = {'form': self.form_class}
        html_form = render_to_string(template_name=self.template_name, context=context, request=request)
        return JsonResponse({'html_form': html_form})