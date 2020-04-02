from django.contrib.auth import get_user_model
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

User = get_user_model()


class SignUpForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')

    def __init__(self, *args, **kwargs):
        super(SignUpForm, self).__init__(*args, **kwargs)
        self.fields['username'].widget.attrs['placeholder'] = 'Придумайте логин'
        self.fields['email'].widget.attrs['placeholder'] = 'Введите email'
        self.fields['password1'].widget.attrs['placeholder'] = 'Введите пароль'
        self.fields['password2'].widget.attrs['placeholder'] = 'Подтвердите пароль'

        for field in self.fields.values():
            field.label = ''
            field.help_text = ''


class SignInForm(AuthenticationForm):
    def __init__(self, *args, **kwargs):
        super(SignInForm, self).__init__(self, *args, **kwargs)
        self.fields['username'].widget.attrs['placeholder'] = 'Введите логин'
        self.fields['password'].widget.attrs['placeholder'] = 'Введите пароль'
        for field in self.fields.values():
            field.label = ''
