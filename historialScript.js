const URL = "https://script.google.com/macros/s/AKfycbw0RmSLSo-xCshLuz7hYTPOPKzvlSBfaBszdGrzECzvo2l7roemoo2yRQfEUeZU4Hn2QQ/exec";

const btn = document.getElementById("cargar");
const select = document.getElementById("tipo");
const tabla = document.getElementById("tabla");

btn.addEventListener("click", cargar);

function cargar() {

  const tipo = select.value;

  fetch(URL + "?tipo=" + tipo)
    .then(r => r.json())
    .then(data => {

      tabla.innerHTML = "";

      data.forEach(fila => {

        const tr = document.createElement("tr");

        fila.forEach(celda => {
          const td = document.createElement("td");
          td.textContent = celda;
          tr.appendChild(td);
        });

        tabla.appendChild(tr);

      });

    })
    .catch(err => {
      console.error(err);
      alert("Error cargando datos");
    });
}
