from django.views.generic import ListView, DetailView

from .models import Doctor


class DoctorView(ListView):
    model = Doctor
    template_name = 'staff/doctor_list.html'
    context_object_name = 'doctors'
    paginate_by = 4


class DoctorDetailView(DetailView):
    model = Doctor
    template_name = 'staff/doctor_detail.html'
    context_object_name = 'doctor'
