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
    confirmed_by_doctor = models.BooleanField(verbose_name='Подтвержден доктором', default=False)

    class Meta:
        verbose_name = 'Прием'
        verbose_name_plural = 'Приемы'
        ordering = ('-date', '-from_time')

    def __str__(self):
        return 'Врач: %s. Пациент: %s. Дата: %s. Время: %s - %s' % (
            self.doctor, self.patient, self.date, self.from_time,
            self.to_time)

    @staticmethod
    def is_times_equal(from_time, to_time):
        return from_time.hour == to_time.hour and from_time.minute == to_time.minute

    @staticmethod
    def is_to_time_greater_then_from_time(from_time, to_time):
        return from_time > to_time

    @staticmethod
    def is_time_out_of_reception_range(from_time, to_time):
        return (from_time.hour != to_time.hour and (
            not 20 <= 60 - from_time.minute + to_time.minute <= 40)) or (
                       from_time.hour == to_time.hour and not 20 <= to_time.minute - from_time.minute <= 40)

    @staticmethod
    def is_time_out_of_working_range(from_time, to_time):
        now = datetime.datetime.now()
        working_time_start = now.replace(hour=8, minute=0, second=0, microsecond=0).time()
        working_time_end = now.replace(hour=20, minute=0, second=0, microsecond=0).time()
        return (not working_time_start <= from_time <= working_time_end) or (
            not working_time_start <= to_time <= working_time_end)

    @staticmethod
    def is_datetime_in_past(date, from_time, to_time):
        now = datetime.datetime.now()
        return date < now.date() or (date == now.date() and from_time < now.time())

    def save(self, *args, **kwargs):
        # if self.is_datetime_in_past(self.date, self.from_time, self.to_time):
        #     raise Exception('Прием не может состояться в прошлом!')
        if self.is_times_equal(self.from_time, self.to_time):
            raise Exception('Время начала приема не должно совпадать с временем его окончания!')
        elif self.is_to_time_greater_then_from_time(self.from_time, self.to_time):
            raise Exception('Время начала приема не может быть больше его окончания!')
        elif self.is_time_out_of_reception_range(self.from_time, self.to_time):
            raise Exception('Прием должен длиться от 20 до 40 минут!')
        elif self.is_time_out_of_working_range(self.from_time, self.to_time):
            raise Exception('Время работы центра с 8 до 20!')

        super().save(*args, **kwargs)
