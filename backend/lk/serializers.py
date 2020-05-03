from rest_auth.serializers import UserDetailsSerializer


class CustomerUserSerializer(UserDetailsSerializer):
    class Meta(UserDetailsSerializer.Meta):
        fields = ('pk', 'username', 'email', 'first_name', 'last_name',
                  'middle_name', 'phone_number', 'avatar',)
        read_only_fields = ()
