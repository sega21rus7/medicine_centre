from django.db import models


class Reception(models.Model):
    patient = models.ForeignKey('client.Patient', verbose_name='Пациент',
                                on_delete=models.CASCADE, related_name='receptions',
                                blank=True, null=True)
    doctor = models.ForeignKey('staff.Doctor', verbose_name='Врач',
                               on_delete=models.CASCADE, related_name='receptions', blank=True)
    from_time = models.TimeField(verbose_name='C', blank=True)
    to_time = models.TimeField(verbose_name='До', blank=True)
    date = models.DateField(verbose_name='Дата', blank=True)

    class Meta:
        verbose_name = 'Прием'
        verbose_name_plural = 'Приемы'
        ordering = ('-date', '-from_time')

    def __str__(self):
        return 'Врач: %s. Пациент: %s. Дата: %s. Время: %s - %s' % (
            self.doctor, self.patient, self.date, self.from_time,
            self.to_time)
