import axios from 'axios';

const API_URL = 'https://database-ge4e.onrender.com';

/**
 * Servicio de gestión de tasas, encargado de obtener y actualizar
 * la información de las carteras y facturas de los usuarios.
 */
export default class TasaService {

    /**
     * Obtiene la cartera asociada a un usuario específico usando su ID.
     * @param {number} idUsuario - El ID del usuario del que se busca la cartera.
     * @returns {Promise<Object|null>} La cartera del usuario o null si no se encuentra.
     * @throws Error si ocurre un problema en la solicitud.
     */
    static async getCarterasByUsuario(idUsuario) {
        try {
            // Solicita la cartera relacionada al usuario por medio de su ID
            const response = await axios.get(`${API_URL}/cartera`, {
                params: { user_id: idUsuario },
            });

            if (response.data.length > 0) {
                console.log("Cartera obtenida:", response.data[0]);
                return response.data[0]; // Retorna la primera cartera encontrada del usuario
            } else {
                console.warn("No se encontraron carteras para este usuario.");
                return null;
            }
        } catch (error) {
            console.error("Error al obtener la cartera del usuario:", error.message);
            throw error;
        }
    }

    /**
     * Actualiza una factura específica dentro de una cartera.
     * @param {number} idCartera - El ID de la cartera a la que pertenece la factura.
     * @param {Object} factura - La factura actualizada con sus detalles.
     * @returns {Promise<void>} Promesa que indica el éxito de la operación.
     * @throws Error si ocurre un problema en la solicitud.
     */
    static async updateFactura(idCartera, factura) {
        try {
            const url = `${API_URL}/cartera/${idCartera}`;
            console.log(`Intentando actualizar la factura en URL: ${url}`);

            // Obtener la cartera actual para verificar la existencia de la factura
            const carteraResponse = await axios.get(url);
            const cartera = carteraResponse.data;

            // Reemplazar la factura actual con la información actualizada
            const facturasActualizadas = cartera.facturas.map(f =>
                f.id === factura.id ? factura : f
            );

            // Enviar la cartera actualizada al backend
            const response = await axios.put(url, { ...cartera, facturas: facturasActualizadas });
            console.log("Factura actualizada:", response.data);
        } catch (error) {
            console.error("Error al actualizar la factura:", error.message);
            throw error;
        }
    }
}
