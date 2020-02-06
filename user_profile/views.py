from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.shortcuts import redirect
from django.template.loader import render_to_string
from django.urls import reverse
from django.views.generic.base import View

from .forms import SignUpForm, SignInForm


class SignOutView(View):
    def get(self, request):
        logout(request)
        return redirect(reverse('main:index'))


class SignUpView(View):
    form_class = SignUpForm
    template_name = 'user_profile/sign_up.html'

    def get(self, request):
        context = {'form': self.form_class}
        html_form = render_to_string(template_name=self.template_name, context=context, request=request)
        return JsonResponse({'html_form': html_form})

    def post(self, request):
        data = {}
        form = self.form_class(request.POST)
        if form.is_valid():
            email = request.POST.get('email')
            password = request.POST.get('password')
            user = form.save()
            if user:
                authenticate(email=email, password=password)
                login(request, user)
        else:
            data['errors'] = form.errors
        return JsonResponse(data)


class SignInView(View):
    form_class = SignInForm
    template_name = 'user_profile/sign_in.html'

    def get(self, request):
        data = {}
        context = {'form': self.form_class}
        data['html_form'] = render_to_string(template_name=self.template_name, context=context, request=request)
        return JsonResponse(data)

    def post(self, request):
        data = {}
        form = self.form_class(request.POST)
        if form.is_valid():
            email = request.POST.get('email')
            password = request.POST.get('password')
            user = authenticate(email=email, password=password)
            if user and user.is_active:
                login(request, user)
        else:
            data['errors'] = form.errors
        return JsonResponse(data)
