from allauth.account.forms import LoginForm
from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm

User = get_user_model()


class SignForm(forms.Form):
    def __init__(self, *args, **kwargs):
        super(SignForm, self).__init__(*args, **kwargs)
        self.fields['login'].widget.attrs['placeholder'] = 'Логин'
        for field in self.fields.values():
            field.label = ''
            field.help_text = ''
            field.widget.attrs['class'] = 'form-control form-control-user'


class SignUpForm(SignForm, UserCreationForm):
    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')

    def __init__(self, *args, **kwargs):
        super(SignUpForm, self).__init__(*args, **kwargs)
        self.fields['email'].widget.attrs['placeholder'] = 'Email'
        self.fields['password1'].widget.attrs['placeholder'] = 'Пароль'
        self.fields['password2'].widget.attrs['placeholder'] = 'Подтвердите пароль'


class SignInForm(SignForm, LoginForm):
    def __init__(self, *args, **kwargs):
        super(SignInForm, self).__init__(*args, **kwargs)
        self.fields['login'].widget.attrs['placeholder'] = 'Логин/Email'
        self.fields['password'].widget.attrs['placeholder'] = 'Пароль'
