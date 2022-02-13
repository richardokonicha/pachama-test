from django.db import models

# Create your models here.
class Forest(models.Model):
    slug = models.SlugField(max_length=100, unique=True)
    forest_name= models.CharField(max_length=100)
    thumbnail_image= models.CharField(max_length=100)
    forest_type= models.CharField(max_length=100)
    brief_description= models.TextField(max_length=250)
    location=models.CharField(max_length=100)
    area_covered= models.CharField(max_length=100)
    country= models.CharField(max_length=100)
    long_description= models.TextField(max_length=250)
    health_metrics=models.CharField(max_length=100)

    def __str__(self):
        return self.forest_name

