class MultipleSerializerViewSetMixin(object):
    list_serializer_class = serializer_class = None
    crud_serializer_class = None

    def get_serializer_action_class(self, action):
        serializer_action_classes = {
            'list': self.list_serializer_class,
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
