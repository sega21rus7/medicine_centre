class AdminUserMixin:
    # столбцы для django админки
    def get_username(self):
        return self.user.username

    def get_email(self):
        return self.user.email

    def get_last_name(self):
        return self.user.last_name

    def get_first_name(self):
        return self.user.first_name

    def get_middle_name(self):
        return self.user.middle_name

    get_username.short_description = 'имя пользователя'
    get_email.short_description = 'email'
    get_last_name.short_description = 'фамилия'
    get_first_name.short_description = 'имя'
    get_middle_name.short_description = 'отчество'
