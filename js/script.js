import { fetchApi } from "./fetch.js";

let valores = [];
let fechas = [];

async function renderData() {
    const indicators = await fetchApi('https://mindicador.cl/api/uf')
    console.log(indicators)
    valores = indicators.serie.map(indicator => indicator.valor)
    console.log(valores)
    fechas = indicators.serie.map(indicator => indicator.fecha)
    console.log(fechas)



    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['fecha'],
            datasets: [{
                label: 'Valores de la Unidad de fomento en Chile',
                data: valores,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

renderData()

