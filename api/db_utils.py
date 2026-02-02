from django.db import connection, DatabaseError

class TransactionDB:
    @staticmethod
    def execute_procedure(procedure_name: str, params: list = None):
        if params is None:
            params = []
        placeholders = ", ".join(["%s"] * len(params))
        sql = f"CALL {procedure_name}({placeholders})"

        with connection.cursor() as cursor:
            try:
                cursor.execute(sql, params)
                return {"status": "success", "message": f"{procedure_name} executada."}
            except DatabaseError as e:
                return {"status": "error", "message": str(e)}
            except Exception as e:
                return {"status": "error", "message": f"Erro inesperado: {str(e)}"}