// Definición de una función llamada fetchApi que acepta una URL como argumento
export const fetchApi = async (url) => {
    // Realiza una solicitud a la URL proporcionada utilizando la función fetch
    const response = await fetch(url);

    // Espera a que la respuesta se convierta en formato JSON utilizando el método .json()
    const data = response.json();

    // Devuelve los datos obtenidos de la API
    return data;
};
