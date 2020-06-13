import datetime

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

    def save(self, *args, **kwargs):
        now = datetime.datetime.now()
        working_time_start = now.replace(hour=8, minute=0, second=0, microsecond=0).time()
        working_time_end = now.replace(hour=20, minute=0, second=0, microsecond=0).time()
        if (not working_time_start < self.from_time < working_time_end) or (
                not working_time_start < self.to_time < working_time_end):
            raise Exception('Время работы центра с 8 до 20!')

        super().save(*args, **kwargs)
