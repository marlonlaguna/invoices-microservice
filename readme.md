OPCIÓN 1: EJECUTAR CON NODE.JS (LOCAL)--------------------------------------------------------------------

REQUISITOS:

Node.js versión 18 o superior

npm

Puerto 3000 disponible

PASOS:

Una vez se clone el proyecto:

Instalar dependencias
npm install

Iniciar el servidor

npm start

Verificar que el servicio está corriendo

Swagger:
http://localhost:3000/api-docs

* Desde el Swagger se puede enviar un archivo de excel, el cual se llama "test.xlsx" y se encuentra en la raiz de el proyecto

* una vez se cargue el archivo excel se pueden ejecutar el resto de Apis

OPCIÓN 2: EJECUTAR CON DOCKER----------------------------------------------------------------------------------------

REQUISITOS:

Docker instalado


Construir la imagen
docker build -t invoices-microservice:1.0.0 .

Ejecutar el contenedor
docker run -p 3000:3000 invoices-microservice:1.0.0

Verificar

Aplicación:
http://localhost:3000

Swagger:
http://localhost:3000/api-docs

_______________________________________________________________________________________________________________---

ENDPOINTS PRINCIPALES PARA PRUEBA

GET /invoices
GET /invoices/{invoice_id}
GET /customers/{customer_id}/total
POST /upload (requiere archivo Excel .xlsx)

NOTAS IMPORTANTES

No se requieren variables de entorno para ejecutar el servicio

El endpoint /upload reprocesa todas las facturas

Swagger se expone en /api-docs

Puerto por defecto: 3000