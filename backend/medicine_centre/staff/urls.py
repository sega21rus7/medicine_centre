from django.urls import path, include
from . import views

app_name = 'staff'

urlpatterns = [
    path('doctor_list', views.DoctorView.as_view(), name='doctor_list_api'),
    path('doctor_list/<str:slug>/', views.DoctorDetailView.as_view(), name='doctor_detail_api'),

    path('api/', include('staff.api.urls'))
]
