from allauth.account.adapter import DefaultAccountAdapter
from django.conf import settings


class DefaultAccountAdapterCustom(DefaultAccountAdapter):
    def send_mail(self, template_prefix, email, context):
        context['site_url'] = settings.SITE_URL
        context['site_name'] = settings.SITE_NAME
        context['activate_url'] = settings.SITE_URL + '/verify_email/' + context['key']
        msg = self.render_mail(template_prefix, email, context)
        msg.subject = 'Пожалуйста подтвердите ваш e-mail адрес'
        msg.send()