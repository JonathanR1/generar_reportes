const URL = "https://script.google.com/macros/s/AKfycbwqZWea-ddFjgcm-enCNnKHycaGKkA7_oT4uV6MzU9zdMPpPlbzERY4m5PWhhKwlUSo/exec";

function guardarQR() {

  const ahora = new Date();

  const data = {
    fecha: ahora.toISOString(),
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

