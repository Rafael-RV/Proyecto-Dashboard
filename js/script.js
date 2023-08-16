// Importa la función fetchApi desde el archivo fetch.js
import { fetchApi } from "./fetch.js";


// Grafico de la UF 
// Arrays para almacenar los valores y las fechas de los indicadores
let valores = [];
let fechas = [];

// Función asincrónica para renderizar los datos y generar el gráfico
async function renderData() {
    // Llama a la función fetchApi para obtener los indicadores
    const indicators = await fetchApi('https://mindicador.cl/api/uf');

    // Muestra los indicadores en la consola
    console.log(indicators);

    // Mapea los valores de los indicadores en el array valores
    valores = indicators.serie.map(indicator => indicator.valor);

    // Muestra los valores en la consola
    console.log(valores);

    // Convierte las fechas a formato ISO y obtiene solo la parte de la fecha (YYYY-MM-DD)
    fechas = indicators.serie.map(indicator => {
        const isoDate = new Date(indicator.fecha).toISOString();
        return isoDate.slice(0, 10);
    });

    // Obtiene las primeras 7 fechas formateadas
    const primerasFechas = fechas.slice(0, 7);

    // Muestra las primeras fechas en la consola
    console.log(primerasFechas);

    // Obtiene el elemento canvas en el HTML
    const ctx = document.getElementById('indicador-UF');

    // Crea un nuevo gráfico utilizando la biblioteca Chart.js
    new Chart(ctx, {
        type: 'bar',
        data: {
            // Usa las primeras 7 fechas como etiquetas para el eje X
            labels: primerasFechas,
            datasets: [{
                label: 'Valores de la Unidad de fomento en Chile',
                // Usa los valores como datos para el eje Y
                data: valores,
                backgroundColor: [
                   
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(255, 159, 64, 0.3)',
                    'rgba(255, 205, 86, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(153, 102, 255, 0.3)',
                    'rgba(201, 203, 207, 0.3)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)'],

                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

// Llama a la función renderData para mostrar los datos en el gráfico
renderData();


//Grafico de la UTM 

let utmPrices = [];
let utmDates = [];

async function renderGraphicsUTM() {
    // Llama a la función fetchApi para obtener los indicadores de UTM
    const utmIndicators = await fetchApi('https://mindicador.cl/api/utm');


    console.log(utmIndicators);

    // Mapea los valores de los indicadores en el array utmPrices
    utmPrices = utmIndicators.serie.map(indicator => indicator.valor);

    // Muestra los valores de UTM en la consola
    console.log(utmPrices);

    // Convierte las fechas a formato ISO y obtiene solo la parte de la fecha (YYYY-MM-DD)
    utmDates = utmIndicators.serie.map(indicator => {
        const isoDate = new Date(indicator.fecha).toISOString();
        return isoDate.slice(0, 10);
    });

    // Obtiene las primeras 7 fechas formateadas de UTM
    const primerasFechasUTM = utmDates.slice(0, 7);

    // Muestra las primeras fechas de UTM en la consola
    console.log(primerasFechasUTM);

    // Obtiene el elemento canvas en el HTML para el gráfico de UTM
    const ctxUTM = document.getElementById('indicador-UTM');

    // Crea un nuevo gráfico utilizando Chart.js para UTM
    new Chart(ctxUTM, {
        type: 'line',
        data: {
            // Usa las primeras 7 fechas como etiquetas para el eje X
            labels: primerasFechasUTM,
            datasets: [{
                label: 'Valores de la Unidad Tributaria en Chile',
                // Usa los valores de UTM como datos para el eje Y
                data: utmPrices,
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}


renderGraphicsUTM();

// Gráfico de la Tasa de Desempleo

let unemploymentValues = [];
let unemploymentDates = [];

async function renderUnemploymentData() {
    const unemploymentIndicators = await fetchApi('https://mindicador.cl/api/tasa_desempleo');

    // Mapea los valores de los indicadores de tasa de desempleo al arreglo unemploymentValues
    unemploymentValues = unemploymentIndicators.serie.map(indicator => indicator.valor);

    // Convierte las fechas a formato ISO y obtén solo la parte de la fecha (YYYY-MM-DD)
    unemploymentDates = unemploymentIndicators.serie.map(indicator => {
        const isoDate = new Date(indicator.fecha).toISOString();
        return isoDate.slice(0, 10);
    });

    // Obtiene los 3 fechas formateadas
    const firstUnemploymentDates = unemploymentDates.slice(0, 6);

    // Obtén el elemento canvas en el HTML
    const ctx = document.getElementById('indicador-tasaDesempleo');

    // Crea un nuevo gráfico utilizando la biblioteca Chart.js
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: firstUnemploymentDates,
            datasets: [{
                label: 'Tasa de Desempleo',
                data: unemploymentValues.slice(0, 6),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(39, 174, 96)',
                    'rgb(235, 152, 78)',
                    'rgb(187, 143, 206)'
                ],
                hoverOffset: 4
            }]
        }
    });
}

// Llama a la función renderUnemploymentData para mostrar los datos en el gráfico
renderUnemploymentData();

