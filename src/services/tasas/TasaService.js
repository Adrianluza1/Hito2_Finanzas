// services/tasas/TasaService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default class TasaService {
    static async getCarterasByUsuario(idUsuario) {
        const response = await axios.get(`${API_URL}/carteras`, {
            params: { idUsuario },
        });
        return response.data;
    }

    static async saveTasa(idUsuario, tipoCartera, tasa, fecha, diasDescuento) {
        const response = await axios.get(`${API_URL}/carteras?idUsuario=${idUsuario}&tipo=${tipoCartera}`);
        if (response.data.length > 0) {
            const cartera = response.data[0];
            cartera.tasa = tasa;
            cartera.fechaAplicacion = fecha;
            cartera.diasDescuento = diasDescuento;

            return axios.put(`${API_URL}/carteras/${cartera.id}`, cartera);
        } else {
            return axios.post(`${API_URL}/carteras`, { idUsuario, tipo: tipoCartera, tasa, fechaAplicacion: fecha, diasDescuento });
        }
    }

    static async getTasaByCartera(idUsuario, tipoCartera) {
        const response = await axios.get(`${API_URL}/carteras`, {
            params: { idUsuario, tipo: tipoCartera },
        });
        return response.data.length > 0
            ? response.data[0]
            : { tasa: '', fechaAplicacion: '', diasDescuento: '' };
    }
}
