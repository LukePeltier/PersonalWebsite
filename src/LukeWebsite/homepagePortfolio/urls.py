from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('hello-webpack/', views.hello_webpack, name='hello_webpack')
]
