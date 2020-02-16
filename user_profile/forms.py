from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import AuthenticationForm

User = get_user_model()


class SignUpForm(forms.ModelForm):
    email = forms.CharField(label='', widget=forms.TextInput(attrs={'placeholder': 'Введите email'}))
    password = forms.CharField(label='', widget=forms.PasswordInput(attrs={'placeholder': 'Введите пароль'}))
    password_confirmation = \
        forms.CharField(label='', widget=forms.PasswordInput(attrs={'placeholder': 'Подтвердите пароль'}))

    class Meta:
        model = User
        fields = ('email', 'password', 'password_confirmation',)


class SignInForm(AuthenticationForm):
    email = forms.CharField(label='', widget=forms.TextInput(attrs={'placeholder': 'Введите email'}))
    password = forms.CharField(label='', widget=forms.PasswordInput(attrs={'placeholder': 'Введите пароль'}))

    class Meta:
        model = User
        fields = ('email', 'password',)
