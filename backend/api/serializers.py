from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Forest

class ForestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forest
        fields = [ 
            "slug",
            'forest_name', 
            'thumbnail_image',
            'forest_type',
            'brief_description',
            'location',
            'area_covered',
            'country',
            'long_description',
            'health_metrics',
            ]
