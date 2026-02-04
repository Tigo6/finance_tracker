from django.urls import path
from .views import *

urlpatterns = [
    path('transactions/add/', AddTransactionView.as_view(), name='api_add_transaction'),
    path('get-transaction-types', GetTransactionTypes.as_view(), name='api_add_transaction'),
]