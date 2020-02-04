from django.views.generic import TemplateView


class SignInView(TemplateView):
    template_name = 'user_profile/sign_in.html'


class SignUpView(TemplateView):
    template_name = 'user_profile/sign_up.html'
