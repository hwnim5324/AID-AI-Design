from rest_framework import serializers
from .models import goods_design, goods_info, goods_result, profile
from django.contrib.auth.models import User

        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']


class UploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = goods_info
        fields = '__all__'


class DesignSerializer(serializers.ModelSerializer):
    class Meta:
        model = goods_design
        fields = '__all__'


class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = goods_result
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = profile
        fields = '__all__'



