from http.client import responses
from django.db import Error
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .db_utils import TransactionDB


class AddTransactionView(APIView):
    def post(self, request):
        try:
            params = [
                request.data.get('type_id'),
                request.data.get('amount'),
                request.data.get('date'),
                request.data.get('username')
            ]

            if None in params:
                return Response({"error": "Dados incompletos"}, status=status.HTTP_400_BAD_REQUEST)

            result = TransactionDB.execute_procedure('SP_InsertTransaction', params)
            if result["status"] == "success":
                return Response(result, status=status.HTTP_201_CREATED)
            return Response(result, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Error as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class GetTransactionTypes(APIView):
    def get(self, request):
        try:
            params = [
                request.data.get('type_id'),
                request.data.get('amount'),
                request.data.get('date'),
                request.data.get('username')
            ]

            if None in params:
                return Response({"error": "Dados incompletos"}, status=status.HTTP_400_BAD_REQUEST)

            result = TransactionDB.execute_procedure('SP_InsertTransaction', params)
            if result["status"] == "success":
                return Response(result, status=status.HTTP_201_CREATED)
            return Response(result, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Error as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)