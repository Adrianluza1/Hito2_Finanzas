import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default class UserService {
    static async obtenerDatosUsuario(usuarioId) {
        try {
            const response = await axios.get(`${API_URL}/user/${usuarioId}`);
            console.log("Datos del usuario obtenidos:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error al obtener los datos del usuario:", error.message);
            throw error;
        }
    }
}
