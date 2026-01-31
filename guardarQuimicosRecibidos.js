const URL = "https://script.google.com/macros/s/AKfycbwqZWea-ddFjgcm-enCNnKHycaGKkA7_oT4uV6MzU9zdMPpPlbzERY4m5PWhhKwlUSo/exec";

function guardarQR() {

  const data = {
    fecha: document.getElementById("fecha").value,
    prelavador: document.getElementById("prelavador_rec").value,
    detergente: document.getElementById("detergente_rec").value,
    cloro: document.getElementById("cloro_rec").value
  };

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(r => r.json())
  .then(res => {
    alert("Guardado correctamente ✅");
  })
  .catch(err => {
    console.error(err);
    alert("Error al guardar ❌");
  });
}
