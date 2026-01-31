const URL = "https://script.google.com/macros/s/AKfycbwqZWea-ddFjgcm-enCNnKHycaGKkA7_oT4uV6MzU9zdMPpPlbzERY4m5PWhhKwlUSo/exec";

function guardarQR() {

  const ahora = new Date();

  const dia  = String(ahora.getDate()).padStart(2, "0");
  const mes  = String(ahora.getMonth() + 1).padStart(2, "0");
  const anio = ahora.getFullYear();

  const fechaBonita = `${dia}/${mes}/${anio}`;

  const data = {
    fecha: fechaBonita,
    prelavador: document.getElementById("prelavador_rec").value,
    detergente: document.getElementById("detergente_rec").value,
    cloro: document.getElementById("cloro_rec").value
  };

  fetch(URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(data)
  });

  alert("Guardado correctamente ✅");
}
