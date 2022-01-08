from rest_framework import fields, serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User