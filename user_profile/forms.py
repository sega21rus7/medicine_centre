from django import forms
from django.contrib.auth import get_user_model


class SignUpForm(forms.ModelForm):
    password_confirmation = forms.CharField(widget=forms.PasswordInput())

    class Meta:
        model = get_user_model()
        fields = ('email', 'password', 'password_confirmation',)


class SignInForm(forms.ModelForm):
    class Meta:
        model = get_user_model()
        fields = ('email', 'password',)
