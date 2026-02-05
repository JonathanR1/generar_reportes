const URL = "https://script.google.com/macros/s/AKfycbw0RmSLSo-xCshLuz7hYTPOPKzvlSBfaBszdGrzECzvo2l7roemoo2yRQfEUeZU4Hn2QQ/exec";

const btn = document.getElementById("cargar");
const select = document.getElementById("tipo");
const tabla = document.getElementById("tabla");
const loader = document.getElementById("loader");
const loaderText = document.getElementById("loaderText");

btn.addEventListener("click", cargar);

function cargar() {
  const tipo = select.value;

  loader.style.display = "block";
  loaderText.style.display = "block";

  // Mensajes que cambiarán cada 2 segundos
  const mensajes = [
    "Cargando hoja: " + tipo + "...",
    "Está tardando más de lo esperado... por favor espere"
  ];
  let indice = 0;
  loaderText.textContent = mensajes[indice];

  // Intervalo para cambiar los mensajes
  const intervalo = setInterval(() => {
    indice = (indice + 1) % mensajes.length;
    loaderText.textContent = mensajes[indice];
  }, 2000);

  tabla.innerHTML = "";

  fetch(URL + "?tipo=" + tipo)
    .then(r => r.json())
    .then(data => {
      clearInterval(intervalo); // detiene el cambio de mensajes
      loader.style.display = "none";
      loaderText.style.display = "none";

      data.forEach((fila, i) => {
        const tr = document.createElement("tr");
        fila.forEach(celda => {
          const celdaHtml = document.createElement(i === 0 ? "th" : "td");
          // Detectar si es fecha en formato ISO
  if (typeof celda === "string" && /^\d{4}-\d{2}-\d{2}T/.test(celda)) {
    const fecha = new Date(celda);
    // Formato DD/MM/YYYY
    celdaHtml.textContent = `${fecha.getDate().toString().padStart(2,'0')}/` +
                            `${(fecha.getMonth()+1).toString().padStart(2,'0')}/` +
                            `${fecha.getFullYear()}`;
  } else {
    celdaHtml.textContent = celda;
  }
          tr.appendChild(celdaHtml);
        });
        tabla.appendChild(tr);
      });

    })
    .catch(err => {
      clearInterval(intervalo); // también detener si hay error
      loader.style.display = "none";
      alert("Error cargando datos");
    });
}
