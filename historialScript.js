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
  loaderText.textContent = "Cargando hoja: " + tipo + "...";
  tabla.innerHTML = "";

  fetch(URL + "?tipo=" + tipo)
    .then(r => r.json())
    .then(data => {

      loader.style.display = "none";
      loaderText.style.display = "none";
      data.forEach((fila, i) => {

        const tr = document.createElement("tr");

        fila.forEach(celda => {

          const celdaHtml = document.createElement(i === 0 ? "th" : "td");
          celdaHtml.textContent = celda;
          tr.appendChild(celdaHtml);

        });

        tabla.appendChild(tr);

      });

    })
    .catch(err => {
      loader.style.display = "none";
      alert("Error cargando datos");
    });
}
