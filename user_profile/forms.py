from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import CustomerUser


class CustomerUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = CustomerUser
        fields = ('email',)


class CustomerUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomerUser
        fields = ('email',)
