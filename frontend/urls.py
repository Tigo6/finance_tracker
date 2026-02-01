from django.contrib import admin
from django.urls import path
from django.urls import path
from .views import HomepageView # Importe relativo

urlpatterns = [
    path('', HomepageView.as_view(), name='homepage'),
]