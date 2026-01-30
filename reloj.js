function actualizarFechaHora() {
  const ahora = new Date();

  const opciones = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  const elemento = document.getElementById("fechaHora");

  if (elemento) {
    elemento.textContent = ahora.toLocaleString('es-ES', opciones);
  }
}

actualizarFechaHora();
setInterval(actualizarFechaHora, 1000);
