from django.contrib.auth import authenticate, login
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
                data['form_is_valid'] = True
        else:
            data['form_is_valid'] = False
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
                data['form_is_valid'] = True
        else:
            data['form_is_valid'] = False
            data['errors'] = form.errors
        return JsonResponse(data)
