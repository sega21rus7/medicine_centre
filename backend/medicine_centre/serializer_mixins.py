class MultipleSerializerViewSetMixin:
    serializer_class = None
    crud_serializer_class = None

    def get_serializer_action_class(self, action):
        serializer_action_classes = {
            'list': self.serializer_class,
            'create': self.crud_serializer_class,
            'update': self.crud_serializer_class,
            'destroy': self.crud_serializer_class,
        }
        return serializer_action_classes[action]

    def get_serializer_class(self):
        try:
            return self.get_serializer_action_class(self.action)
        except (KeyError, AttributeError):
            return super(MultipleSerializerViewSetMixin, self).get_serializer_class()


class MultiplePermissionsViewSetMixin:
    serializer_permission_classes = None
    crud_serializer_permission_classes = None

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = self.serializer_permission_classes
        else:
            permission_classes = self.crud_serializer_permission_classes
        return [permission() for permission in permission_classes]
