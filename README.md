# AsisteUNC - API de Registro de Asistencia

Esta es una API desarrollada para el registro de asistencia de usuarios en eventos de la Universidad Nacional de Cajamarca, utilizando el software AsisteUNC. La aplicación permite a los usuarios registrar su asistencia a través de un ID proporcionado por un código QR o ingresado manualmente.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Rutas de la API](#rutas-de-la-api)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/Davs07/AsisteUNCAPI.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd AsisteUNCAPI
   ```
3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

## Configuración

1. Asegúrate de tener configurada la base de datos de SQL Server y proporcionar la información de conexión en `db.js`.

2. Inicia la API ejecutando el siguiente comando:
   ```bash
   npm run dev
   ```
   La API se ejecutará en `http://localhost:3333`.

## Uso

- Al iniciar la API, puedes acceder a la página principal de asistencia en `http://localhost:3333/`.
- Los usuarios pueden ingresar su ID de registro para registrar su asistencia en el evento.

## Rutas de la API

- `GET /`: Sirve la página principal del sistema de asistencia.
- `GET /confirmacion`: Sirve la página de confirmación del registro de asistencia.
- `POST /registrar-asistencia/:id`: Permite registrar la asistencia de un usuario en un evento utilizando su ID de registro.

## Tecnologías Utilizadas

- **Backend**: Node.js, Express.js
- **Base de Datos**: SQL Server
- **Frontend**: HTML, JavaScript
- **Estilos**: Tailwind CSS (vía CDN)
- **Otros**: CORS, MSSQL (para conexión a la base de datos)

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Empuja los cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

## Licencia

Este proyecto está licenciado bajo los términos de la [MIT License](LICENSE).
