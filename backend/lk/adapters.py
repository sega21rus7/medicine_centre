from allauth.account.adapter import DefaultAccountAdapter
from django.conf import settings


class DefaultAccountAdapterCustom(DefaultAccountAdapter):
    def send_mail(self, template_prefix, email, context):
        context['activate_url'] = settings.FRONT_URL + \
                                  'verify_email/' + context['key']
        super(DefaultAccountAdapterCustom, self).send_mail(template_prefix, email, context)
