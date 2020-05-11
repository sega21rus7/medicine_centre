from django.db import models


class Office(models.Model):
    number = models.CharField(verbose_name='Номер', max_length=3)
    floor = models.CharField(verbose_name='Этаж', max_length=1)

    class Meta:
        verbose_name = 'Кабинет'
        verbose_name_plural = 'Кабинеты'

    def __str__(self):
        return '№ %s' % self.number


class Reception(models.Model):
    patient = models.ForeignKey('client.Patient', verbose_name='Пациент',
                                on_delete=models.CASCADE, related_name='receptions')
    doctor = models.ForeignKey('staff.Doctor', verbose_name='Врачи',
                               on_delete=models.CASCADE, related_name='receptions')
    date = models.DateField(verbose_name='Дата')
    time = models.TimeField(verbose_name='Время')

    class Meta:
        verbose_name = 'Прием'
        verbose_name_plural = 'Приемы'

    def __str__(self):
        return str(self.pk)
