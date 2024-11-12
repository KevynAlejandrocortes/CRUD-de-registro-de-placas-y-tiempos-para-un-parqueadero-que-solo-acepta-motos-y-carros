# Guia ejecucion.

URL: http://localhost:3000/api/registro
Método: POST
Cuerpo (JSON):
{
  "placa": "ABC123",
"tipo": "carro"
}

Ver cupos disponibles (GET)
Este comando permite consultar los cupos disponibles para carros y motos en el parqueadero.



URL: http://localhost:3000/api/registro
Método: GET
Cuerpo (JSON): http://localhost:3000/api/registros/cupos

Obtener todos los registros (GET)
Este comando te permite ver todos los registros actuales en el parqueadero.

Método: GET
URL: http://localhost:3000/api/registros
Obtener un registro específico por ID (GET)
Con este comando puedes ver el detalle de un registro específico por su _id.

Método: GET

URL: http://localhost:3000/api/registros/{id}

Reemplaza {id} por el ID del registro específico, como 64a92b6db1c88a6d462112f8.
Actualizar un registro (registrar hora de salida) (PUT)
Este comando permite actualizar un registro existente para agregar la hora de salida (por ejemplo, cuando el vehículo sale del parqueadero).

Método: PUT
URL: http://localhost:3000/api/registros/{id}
Reemplaza {id} por el ID del registro, como 64a92b6db1c88a6d462112f8.
Encabezados:
Content-Type: application/json
Cuerpo (JSON):
Eliminar un registro (DELETE)
Este comando permite eliminar un registro específico del parqueadero.

Método: DELETE
URL: http://localhost:3000/api/registros/{id}
Reemplaza {id} por el ID del registro, como 64a92b6db1c88a6d462112f8.

Método	URL	Descripción
GET	/api/registros/cupos	Obtener cupos disponibles.
POST	/api/registros	Registrar entrada de vehículo (sin hora de entrada en el cuerpo).
GET	/api/registros	Obtener todos los registros.
GET	/api/registros/{id}	Obtener un registro específico.
PUT	/api/registros/{id}	Actualizar un registro (hora de salida).
DELETE	/api/registros/{id}	Eliminar un registro.
