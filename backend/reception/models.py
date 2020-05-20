from django.db import models


class Reception(models.Model):
    patient = models.ForeignKey('client.Patient', verbose_name='Пациент',
                                on_delete=models.CASCADE, related_name='receptions')
    doctor = models.ForeignKey('staff.Doctor', verbose_name='Врач',
                               on_delete=models.CASCADE, related_name='receptions')
    work_time = models.ForeignKey('staff.WorkTime', verbose_name='Время приема',
                                  on_delete=models.CASCADE, related_name='receptions')

    class Meta:
        verbose_name = 'Прием'
        verbose_name_plural = 'Приемы'

    def __str__(self):
        return 'Врач: %s. Пациент: %s. Дата: %s. Время: %s - %s' % (
            self.doctor, self.patient, self.work_time.date, self.work_time.from_time,
            self.work_time.to_time)
