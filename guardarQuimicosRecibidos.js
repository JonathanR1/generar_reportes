const URL = "https://script.google.com/macros/s/AKfycbwqZWea-ddFjgcm-enCNnKHycaGKkA7_oT4uV6MzU9zdMPpPlbzERY4m5PWhhKwlUSo/exec";

function guardarQR() {

  const ahora = new Date();

  const dia  = String(ahora.getDate()).padStart(2, "0");
  const mes  = String(ahora.getMonth() + 1).padStart(2, "0");
  const anio = ahora.getFullYear();

  const fechaBonita = `${dia}/${mes}/${anio}`;

  const data = {
    tipo: "recibidos",
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

function guardarQE() {

  const ahora = new Date();

  const dia  = String(ahora.getDate()).padStart(2, "0");
  const mes  = String(ahora.getMonth() + 1).padStart(2, "0");
  const anio = ahora.getFullYear();

  const fechaBonita = `${dia}/${mes}/${anio}`;

  const data = {
    tipo: "existentes",
    fecha: fechaBonita,
    prelavador: document.getElementById("prelavador_exi").value,
    detergente: document.getElementById("detergente_exi").value,
    cloro: document.getElementById("cloro_exi").value
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

function guardarQU() {

  const ahora = new Date();

  const dia  = String(ahora.getDate()).padStart(2, "0");
  const mes  = String(ahora.getMonth() + 1).padStart(2, "0");
  const anio = ahora.getFullYear();

  const fechaBonita = `${dia}/${mes}/${anio}`;

  const data = {
    tipo: "utilizados",
    fecha: fechaBonita,
    prelavador: document.getElementById("prelavador_util").textContent,
    detergente: document.getElementById("detergente_util").textContent,
    cloro: document.getElementById("cloro_util").textContent
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

function guardarTodo() {

  guardarQR();
  guardarQE();
  guardarQU();

}


