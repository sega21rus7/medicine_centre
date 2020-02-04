from django.conf.urls import url

from . import views

app_name = 'user_profile'

urlpatterns = [
    url(r'sign_in/$', views.SignInView.as_view(), name="sign_in"),
    url(r'sign_up/$', views.SignUpView.as_view(), name="sign_up"),
]