import axios from 'axios';

const API_URL = "http://localhost:3000/usuarios"; // URL base del endpoint para usuarios

export default {
    // Obtener todos los usuarios
    obtenerUsuarios() {
        return axios.get(API_URL);
    },

    // Obtener un usuario por su ID
    obtenerUsuario(id) {
        return axios.get(`${API_URL}/${id}`);
    },

    // Actualizar la tasa de un usuario específico
    actualizarTasaUsuario(id, tasas) {
        return axios.patch(`${API_URL}/${id}`, { tasas });
    },

    // Actualizar otros datos del usuario
    actualizarUsuario(id, datos) {
        return axios.put(`${API_URL}/${id}`, datos);
    },

    // Crear un nuevo usuario
    crearUsuario(datos) {
        return axios.post(API_URL, datos);
    },

    // Obtener reportes asociados a un usuario
    obtenerReportesUsuario(id) {
        return axios.get(`${API_URL}/${id}/reportes`);
    },

    // Agregar un reporte a un usuario
    agregarReporteUsuario(id, reporte) {
        return axios.patch(`${API_URL}/${id}`, {
            reportes: axios.get(`${API_URL}/${id}`)
                .then(response => [...response.data.reportes, reporte])
        });
    },

    // Método para el inicio de sesión
    async login(email, password) {
        try {
            const response = await axios.get(API_URL);
            const usuarios = response.data;

            const usuario = usuarios.find(
                user => user.email === email && user.password === password
            );

            if (usuario) {
                return { success: true, usuario };
            } else {
                return { success: false, message: "Credenciales incorrectas" };
            }
        } catch (error) {
            console.error("Error en el inicio de sesión:", error);
            return { success: false, message: "Error de servidor" };
        }
    }
};
