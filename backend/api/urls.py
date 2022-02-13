from django.urls import path
from . import views


urlpatterns = [
    path('', views.getForests, name='getForests'),
    path('<str:slug>', views.getForest, name='getForest'),

]