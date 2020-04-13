from django.db import models

from medicine_centre import settings


class Passport(models.Model):
    series = models.CharField(verbose_name='Серия', max_length=4, db_index=True)
    number = models.CharField(verbose_name='Номер', max_length=6, db_index=True)

    class Meta:
        verbose_name = 'Паспорт'
        verbose_name_plural = 'Паспорта'


class InsurancePolicy(models.Model):
    number = models.CharField(verbose_name='Номер', max_length=16, db_index=True)

    class Meta:
        verbose_name = 'Полис ОМС'
        verbose_name_plural = 'Полисы ОМС'
        ordering = ('-pk',)


class Patient(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, verbose_name='Пользователь',
                             on_delete=models.CASCADE,)
    passport = models.OneToOneField(Passport, verbose_name='Паспорт', on_delete=models.CASCADE)
    insurance_policy = models.OneToOneField(InsurancePolicy, verbose_name='Полис ОМС',
                                            on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Пациент'
        verbose_name_plural = 'Пациенты'
        ordering = ('-user',)

    def __str__(self):
        return self.user.get_fio()
