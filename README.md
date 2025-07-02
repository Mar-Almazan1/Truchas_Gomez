# Truchas y Asadero Gómez - Proyecto Simulado (sin base de datos)

## Descripción
Este proyecto simula el backend de un restaurante sin conectarse a MongoDB. Útil para pruebas o cuando no se tiene acceso a una base de datos.

## Tecnologías
- Node.js
- Express.js

## Instrucciones
1. Abre la carpeta en VS Code
2. En la terminal, ejecuta:
   ```
   npm init -y
   npm install express
   ```
3. Luego ejecuta el servidor:
   ```
   node index.js
   ```

## Rutas simuladas
- `/menu` → Menú falso
- `/pedidos` → Pedidos en memoria
- `/reservaciones` → Reservaciones en memoria
- `/usuarios` → Usuarios en memoria

## Nota
No guarda datos de forma real. Cada vez que reinicias, los datos se borran (modo simulado).
