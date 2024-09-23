import express from "express";
import cors from "cors";
import { getConnection } from "./db.js";
import path from 'path';  // Para manejar rutas de archivos

const app = express();
const PORT = 3333;

// Middleware para habilitar CORS y parsear JSON
app.use(cors());
app.use(express.json());

// Servir archivos estáticos (como JavaScript, CSS, imágenes) desde la carpeta 'public'
app.use(express.static("public"));

// Rutas para servir las páginas HTML
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./views" });
});

app.get("/confirmacion", (req, res) => {
  res.sendFile("confirmacion.html", { root: "./views" });
});

// Ruta para registrar la asistencia y mostrar HTML con mensaje de éxito
app.get('/prueba/:id', async (req, res) => {
    const idRegistro = req.params.id;

    try {
        await registrarAsistencia(idRegistro);
        // Redirigir a la página de confirmación con el ID registrado
        res.redirect(`/confirmacion?id=${idRegistro}`);
    } catch (error) {
        console.error('Error al registrar la asistencia:', error);
        res.status(500).json({ success: false, message: 'Error al registrar la asistencia.' });
    }
});


// Ruta para registrar asistencia
app.post("/registrar-asistencia/:id", async (req, res) => {
  const idRegistro = req.params.id;

  try {
    // Lógica para registrar la asistencia en la base de datos
    await registrarAsistencia(idRegistro); // Supón que tienes una función async
    res.status(200).json({ message: "Asistencia registrada con éxito." });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar asistencia." });
  }
});

// Función simulada para registrar la asistencia (deberías conectarla a tu base de datos)
async function registrarAsistencia(idRegistro) {
  try {
    // Conectarse a la base de datos
    const pool = await getConnection();

    // Ejecutar la consulta o procedimiento almacenado
    const result = await pool.request().input("RegistroId", idRegistro) // Pasar el id como parámetro
      .query(`
                INSERT INTO PruebaQR (RegistroId)
                VALUES (@RegistroId)
            `);

    console.log("Asistencia registrada:", result);
    return result;
  } catch (err) {
    console.error("Error en la consulta SQL:", err);
    throw err;
  }
}

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`API de asistencia corriendo en puerto ${PORT}`);
});
