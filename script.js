const diasArray = [];//estoy creando un arreglo para almacenar los dias
let ProcesodeLavadosXDIASarray = []; //estoy creando un arreglo para almacenar los procesos de lavados
var contador = 0;

class Procesosdelavado {
    constructor(prelavador_pro, detergente_pro, cloro_pro) {
        this.prelavador_pro = prelavador_pro;
        this.detergente_pro = detergente_pro;
        this.cloro_pro = cloro_pro;
    }

    // Método para resetear las variables a 0


    resetearValores() {
        this.prelavador_pro = 0;
        this.detergente_pro = 0;
        this.cloro_pro = 0;
    }
}

class ProcesodeLavadosXDIAS {
    constructor(prelavador8, detergente8, cloro8) {
        this.prelavador8 = prelavador8;
        this.detergente8 = detergente8;
        this.cloro8 = cloro8;
    }

    // Método para resetear las variables a 0


    resetearValores() {
        this.prelavador = 0;
        this.detergente = 0;
        this.cloro = 0;
    }
}

    //estoy creando una clase para cada dia y almacenar sus valores
    class Dias {
        constructor(prelavador, detergente, cloro) {
            this.prelavador = prelavador;
            this.detergente = detergente;
            this.cloro = cloro;
        }
    
        // Método para resetear las variables a 0
        resetearValores() {
            this.prelavador = 0;
            this.detergente = 0;
            this.cloro = 0;
        }
    }

document.getElementById('miBoton').addEventListener('click', function() {
    // Obtener valores ingresados en las cajas de texto
    var prelavadorRec = parseFloat(document.getElementById('prelavador_rec').value) || 0;
    var detergenteRec = parseFloat(document.getElementById('detergente_rec').value) || 0;
    var cloroRec = parseFloat(document.getElementById('cloro_rec').value) || 0;

    var prelavadorExi = parseFloat(document.getElementById('prelavador_exi').value) || 0;
    var detergenteExi = parseFloat(document.getElementById('detergente_exi').value) || 0;
    var cloroExi = parseFloat(document.getElementById('cloro_exi').value) || 0;

    // Calcular químicos utilizados
    var prelavadorUtil = prelavadorRec - prelavadorExi;
    var detergenteUtil = detergenteRec - detergenteExi;
    var cloroUtil = cloroRec - cloroExi;

    // Actualizar las celdas con los resultados
    document.getElementById('prelavador_util').innerText = prelavadorUtil;
    document.getElementById('detergente_util').innerText = detergenteUtil;
    document.getElementById('cloro_util').innerText = cloroUtil;
});

document.getElementById('Ndias').addEventListener('click', function() {
    var numeroDias = parseInt(document.getElementById('Ndiasinput').value) || 0;
    var tablaDias = document.getElementById('tablaDias').getElementsByTagName('tbody')[0];

    // Limpiar la tabla antes de generar nuevas filas
    tablaDias.innerHTML = "";

    // Obtener el resultado de la cantidad utilizada
    var prelavadorUtil = parseFloat(document.getElementById('prelavador_util').innerText) || 0;
    var detergenteUtil = parseFloat(document.getElementById('detergente_util').innerText) || 0;
    var cloroUtil = parseFloat(document.getElementById('cloro_util').innerText) || 0;

    // Calcular el resultado por día
    var prelavadorPorDia = Math.floor(prelavadorUtil / numeroDias);
    var detergentePorDia = Math.floor(detergenteUtil / numeroDias);
    var cloroPorDia = Math.floor(cloroUtil / numeroDias);

    // Calcular el residuo para distribuir
    var prelavadorResiduo = prelavadorUtil % numeroDias;
    var detergenteResiduo = detergenteUtil % numeroDias;
    var cloroResiduo = cloroUtil % numeroDias;

    


    

    for (var i = 1; i <= numeroDias; i++) {
        
        // Crear una nueva fila
        var nuevaFila = document.createElement('tr');

        // Crear y añadir las celdas de la fila
        var celdaDia = document.createElement('td');
        celdaDia.textContent = "Día #" + i;

        var celdaPrelavador = document.createElement('td');
        celdaPrelavador.textContent = prelavadorPorDia + (i <= prelavadorResiduo ? 1 : 0); // Sumar el residuo si corresponde

        var celdaDetergente = document.createElement('td');
        celdaDetergente.textContent = detergentePorDia + (i <= detergenteResiduo ? 1 : 0); // Sumar el residuo si corresponde

        var celdaCloro = document.createElement('td');
        celdaCloro.textContent = cloroPorDia + (i <= cloroResiduo ? 1 : 0); // Sumar el residuo si corresponde
        
        diasArray.push(new Dias(prelavadorPorDia  + (i <= prelavadorResiduo ? 1 : 0) ,detergentePorDia  + (i <= detergenteResiduo ? 1 : 0) ,cloroPorDia  + (i <= cloroResiduo ? 1 : 0)));//aqui asigno los valores a cada dia
        
        // Agregar las celdas a la fila
        nuevaFila.appendChild(celdaDia);
        nuevaFila.appendChild(celdaPrelavador);
        nuevaFila.appendChild(celdaDetergente);
        nuevaFila.appendChild(celdaCloro);

        // Agregar la fila a la tabla
        tablaDias.appendChild(nuevaFila);
    }
});

function generateTabs() {
    var numTabs = parseInt(document.getElementById('Ndiasinput').value);
    var tabsContainer = document.getElementById('tabsContainer');
    var tabsContentContainer = document.getElementById('tabsContentContainer');

    // Limpiar contenido anterior
    tabsContainer.innerHTML = '';
    tabsContentContainer.innerHTML = '';

    


    for (var i = 1; i <= numTabs; i++) {
        // Crear el botón de la pestaña
        var tabButton = document.createElement('button');
        tabButton.className = 'tab';
        tabButton.innerText = 'DIA# ' + i;

        tabButton.onclick = function () {
            var contentId = 'tab' + this.innerText.split(' ')[1];
            console.log(this.innerText.split(' ')[1]  +  'numero del boton presionado')
            contador = this.innerText.split(' ')[1];
            document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
            document.getElementById(contentId).style.display = 'block';
        };

        tabsContainer.appendChild(tabButton);

        // Crear el contenido de la pestaña
        var tabContent = document.createElement('div');
        tabContent.id = 'tab' + i;
        tabContent.className = 'tab-content';
        tabContent.style.display = 'none'; // Ocultar inicialmente

        // Agregar input y botón para generar tabla
        var input = document.createElement('input');
        input.type = 'number';
        input.placeholder = 'ingrese numero de dias';
        input.min = 1; // Asegurarse de que el número sea positivo

        var button = document.createElement('button');
        button.innerText = 'Generar reporte';

        // Función para generar la tabla
        button.onclick = (function(tabContent, input) {
            

            return function() {
                var numberOfRows = parseInt(input.value);
                var contador2 =0;
                    console.log(contador2 + 'valor de contador inicial')
                    contador2= contador - 1;
                    console.log(contador2 + 'valor de contador despues de restar')
                    console.log(numberOfRows + 'numero de rows del ciclo');
                    ProcesodeLavadosXDIASarray = [];
                    console.log('verificando si esta vacio el array')
                    console.log(ProcesodeLavadosXDIASarray);

                        console.log(diasArray[contador2].prelavador / numberOfRows  + 'division pre/rows');
                        
                            // Código a ejecutar si la condición es verdadera
                                console.log('ciclo for de funcion generate tab' + i)
                            for (var j2 = 1; j2 <= numberOfRows; j2++) {
                                console.log('ciclo for de procesos j2: '+j2)
                                //divisiones 
                                var prelavador_procesos =  Math.floor(diasArray[contador2].prelavador / numberOfRows);
                                var detergente_procesos = Math.floor(diasArray[contador2].detergente / numberOfRows);
                                var cloro_procesos = Math.floor(diasArray[contador2].cloro / numberOfRows);
                                //calcular residuos
                                var prelavador_residuos =  diasArray[contador2].prelavador % numberOfRows;
                                var detergente_residuos = diasArray[contador2].detergente % numberOfRows;
                                var cloro_residuos = diasArray[contador2].cloro % numberOfRows;

                                ProcesodeLavadosXDIASarray.push(new Procesosdelavado(    
                           
                                    prelavador_procesos + (j2 <= prelavador_residuos ? 1 : 0),
                                    detergente_procesos + (j2 <= detergente_residuos ? 1 : 0),
                                    cloro_procesos + (j2 <= cloro_residuos ? 1 : 0)
                                )
                                    
                                    
                                    
                                );
                            
                            }
                            
                        
                        

                        
                   
                
                console.log(contador2);
                if (isNaN(numberOfRows) || numberOfRows < 1) {
                    alert('Por favor, ingresa un número válido.');
                    return;
                }
                

                
                var table = '<table border="1"><thead><tr><th>TIPO DE LAVADA</th><th>PRELAVADOR</th><th>DETERGENTE</th><th>CLORO</th></tr></thead><tbody>';
                //aqui voy a generar por cada dia su proceso de lavado
                
                    
                
                



                for (var j = 1; j <= numberOfRows; j++) {
                    table += '<tr><td>PROCESO DE LAVADO: #' + j + '</td><td>'+ProcesodeLavadosXDIASarray[j-1].prelavador_pro+'</td><td>'+ProcesodeLavadosXDIASarray[j-1].detergente_pro+'</td><td>'+ProcesodeLavadosXDIASarray[j-1].cloro_pro+'</td></tr>';
                }
                
                table += '</tbody></table>';


                // Agregar la tabla al contenido de la pestaña
                tabContent.innerHTML += '<br><br><h1> Procesos de lavados generados: #:'+numberOfRows+' </h1> <br>';
                tabContent.innerHTML += table;
            };
        })(tabContent, input); // Pasamos el input específico de cada pestaña

        tabContent.appendChild(input);
        tabContent.appendChild(button);
        tabsContentContainer.appendChild(tabContent);
    }
}

                    console.log('verificando si esta vacio el array otra vez');
                    console.log(ProcesodeLavadosXDIASarray);
console.log(diasArray.length);
console.log(diasArray);
console.log(ProcesodeLavadosXDIASarray.length);
console.log(ProcesodeLavadosXDIASarray);
