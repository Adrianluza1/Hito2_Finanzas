import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default class TasaService {
    // Obtener la cartera de un usuario específico
    static async getCarterasByUsuario(idUsuario) {
        try {
            const response = await axios.get(`${API_URL}/cartera`, {
                params: { user_id: idUsuario },
            });
            if (response.data.length > 0) {
                console.log("Cartera obtenida:", response.data[0]);
                return response.data[0];
            } else {
                console.warn("No se encontraron carteras para este usuario.");
                return null;
            }
        } catch (error) {
            console.error("Error al obtener la cartera del usuario:", error.message);
            throw error;
        }
    }

    // Actualizar la cartera completa, incluyendo las facturas modificadas
    static async updateFactura(idCartera, factura) {
        try {
            // Ruta actualizada para asegurar que está apuntando al endpoint correcto
            const url = `${API_URL}/cartera/${idCartera}`;
            console.log(`Intentando actualizar la factura en URL: ${url}`);

            const carteraResponse = await axios.get(url);
            const cartera = carteraResponse.data;
            const facturasActualizadas = cartera.facturas.map(f => f.id === factura.id ? factura : f);

            const response = await axios.put(url, { ...cartera, facturas: facturasActualizadas });
            console.log("Factura actualizada:", response.data);
        } catch (error) {
            console.error("Error al actualizar la factura:", error.message);
            throw error;
        }
    }
}
