import axios from 'axios';

// URL base de la API utilizada para realizar solicitudes HTTP
const API_URL = 'https://database-ge4e.onrender.com';

/**
 * Clase DatosService
 * Proporciona métodos para interactuar con la API y obtener datos relacionados con carteras de usuarios.
 */
export default class DatosService {

    /**
     * Obtener los datos de una cartera específica en función del ID de la cartera.
     * @param {number} carteraId - El ID de la cartera a consultar.
     * @returns {Promise<Object>} - Retorna un objeto con los datos de la cartera.
     * @throws {Error} - Lanza un error si ocurre un problema al obtener los datos de la cartera.
     */
    static async obtenerDatosCartera(carteraId) {
        try {
            const response = await axios.get(`${API_URL}/cartera/${carteraId}`);
            console.log("Datos de la cartera obtenidos:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error al obtener los datos de la cartera:", error.message);
            throw error;
        }
    }
}
