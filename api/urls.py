from django.urls import path
from .views import AddTransactionView

urlpatterns = [
    path('transactions/add/', AddTransactionView.as_view(), name='api_add_transaction'),
]