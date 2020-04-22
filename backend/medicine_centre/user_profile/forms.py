from allauth.account.forms import \
    LoginForm as AllauthLoginForm, \
    SignupForm as AllauthSignUpForm, \
    ResetPasswordForm as AllauthResetPasswordForm, \
    ResetPasswordKeyForm as AllauthResetPasswordKeyForm
from django import forms
from django.contrib.auth import get_user_model

User = get_user_model()


class SignForm(forms.Form):
    def __init__(self, *args, **kwargs):
        super(SignForm, self).__init__(*args, **kwargs)
        for field in self.fields.values():
            field.label = ''
            field.help_text = ''
            field.widget.attrs['class'] = 'form-control form-control-user'


class SignUpForm(SignForm, AllauthSignUpForm):
    def __init__(self, *args, **kwargs):
        super(SignUpForm, self).__init__(*args, **kwargs)
        self.fields['email'].widget.attrs['placeholder'] = 'Email'
        self.fields['username'].widget.attrs['placeholder'] = 'Логин'
        self.fields['password1'].widget.attrs['placeholder'] = 'Пароль'
        self.fields['password2'].widget.attrs['placeholder'] = 'Подтвердите пароль'


class SignInForm(SignForm, AllauthLoginForm):
    def __init__(self, *args, **kwargs):
        super(SignInForm, self).__init__(*args, **kwargs)
        self.fields['login'].widget.attrs['placeholder'] = 'Логин/Email'
        self.fields['password'].widget.attrs['placeholder'] = 'Пароль'


class ResetPasswordForm(AllauthResetPasswordForm):
    def __init__(self, *args, **kwargs):
        super(ResetPasswordForm, self).__init__(*args, **kwargs)
        self.fields['email'].widget.attrs['placeholder'] = 'Email'
        self.fields['email'].widget.attrs['class'] = 'form-control form-control-user'


class ResetPasswordKeyForm(AllauthResetPasswordKeyForm):
    def __init__(self, *args, **kwargs):
        super(ResetPasswordKeyForm, self).__init__(*args, **kwargs)
        for field in self.fields.values():
            field.widget.attrs['class'] = 'form-control form-control-user'