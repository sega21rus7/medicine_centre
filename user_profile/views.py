from django.contrib.auth import logout, authenticate, login
from django.shortcuts import redirect, render
from django.urls import reverse
from django.views.generic.base import View, TemplateView

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
        return render(request=request, template_name=self.template_name, context=context)

    def post(self, request):
        form = self.form_class(request.POST)
        if form.is_valid():
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = form.save()
            if user:
                authenticate(username=username, password=password)
                login(request, user)
        else:
            context = {'form': form}
            return render(request=request, template_name=self.template_name, context=context)
        return redirect(reverse('lk:index'))


class SignInView(View):
    form_class = SignInForm
    template_name = 'user_profile/sign_in.html'

    def get(self, request):
        context = {'form': self.form_class}
        return render(request=request, template_name=self.template_name, context=context)

    def post(self, request):
        form = self.form_class(request.POST)
        if form.is_valid():
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(username=username, password=password)
            if user and user.is_active:
                login(request, user)
        else:
            context = {'form': form}
            return render(request=request, template_name=self.template_name, context=context)
        return redirect(reverse('lk:index'))
