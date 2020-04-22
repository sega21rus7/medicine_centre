from django.db import models


class CustomerUserQuerySet(models.QuerySet):
    def delete(self, *args, **kwargs):
        for obj in self:
            obj.avatar.delete()
        super(CustomerUserQuerySet, self).delete(*args, **kwargs)