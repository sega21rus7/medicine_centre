from rest_auth.serializers import UserDetailsSerializer


class CustomerUserSerializer(UserDetailsSerializer):
    class Meta(UserDetailsSerializer.Meta):
        fields = ('pk', 'username', 'email', 'first_name', 'last_name',
                  'middle_name', 'phone_number', 'avatar', 'doctor', 'patient', 'nurse', 'is_superuser')
        read_only_fields = ('doctor', 'patient', 'nurse', 'is_super_user')
