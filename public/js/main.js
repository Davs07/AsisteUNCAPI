// Esperar a que el DOM se cargue completamente
document.addEventListener("DOMContentLoaded", () => {
    // Obtener el botón y el campo de entrada
    const submitBtn = document.getElementById("submitBtn");
    const registroIdInput = document.getElementById("registroId");
  
    // Escuchar el evento de clic en el botón
    submitBtn.addEventListener("click", async () => {
      const registroId = registroIdInput.value.trim();
  
      if (!registroId) {
        alert("Por favor, ingrese un ID de registro válido.");
        return;
      }
  
      try {
        // Hacer una solicitud POST a la API para registrar la asistencia
        const response = await fetch(`/registrar-asistencia/${registroId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        // Comprobar si la solicitud fue exitosa
        if (response.ok) {
          // Redirigir a la página de confirmación
          window.location.href = "/confirmacion";
        } else {
          const data = await response.json();
          alert(data.message || "Error al registrar asistencia.");
        }
      } catch (error) {
        console.error("Error al registrar asistencia:", error);
        alert("Hubo un error al intentar registrar tu asistencia. Inténtalo nuevamente.");
      }
    });
  });
  