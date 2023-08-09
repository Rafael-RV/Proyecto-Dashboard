import { fetchApi } from "./fetch.js";

let valor = [];
let fecha = [];

async function renderData() {
    const indicators = await fetchApi('https://mindicador.cl/api')

   valor = indicators.map(indicator => indicator.uf.valor)
    console.log(valor)
    fecha = indicators.map(indicator => indicator.uf.fecha)
    console.log(fecha)
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
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

