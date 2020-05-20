from django.db import models


class Office(models.Model):
    number = models.CharField(verbose_name='Номер', max_length=3)
    floor = models.CharField(verbose_name='Этаж', max_length=1)

    class Meta:
        verbose_name = 'Кабинет'
        verbose_name_plural = 'Кабинеты'

    def __str__(self):
        return '№ %s. Этаж %s' % (self.number, self.floor)


class Reception(models.Model):
    patient = models.ForeignKey('client.Patient', verbose_name='Пациент',
                                on_delete=models.CASCADE, related_name='receptions')
    doctor = models.ForeignKey('staff.Doctor', verbose_name='Врач',
                               on_delete=models.CASCADE, related_name='receptions')
    office = models.ForeignKey(Office, verbose_name='Кабинет',
                               on_delete=models.CASCADE, related_name='offices')
    work_time = models.ForeignKey('staff.WorkTime', verbose_name='Время приема',
                                  on_delete=models.CASCADE, related_name='receptions')

    class Meta:
        verbose_name = 'Прием'
        verbose_name_plural = 'Приемы'

    def __str__(self):
        return 'Врач: %s. Пациент: %s. Дата: %s. Время: %s - %s' % (
            self.doctor, self.patient, self.work_time.date, self.work_time.from_time,
            self.work_time.to_time)
