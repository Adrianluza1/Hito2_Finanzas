// services/ApiService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const ApiService = {
    async login(correo, contrasena) {
        try {
            console.log("Sending login request:", correo, contrasena);
            const response = await axios.post(`${API_URL}/login`, { correo, contrasena });
            console.log("Login response received:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error during login request:", error.response ? error.response.data : error.message);
            throw error;
        }
    },

    async register(correo, nombre, rol, contrasena) {
        try {
            console.log("Sending registration request:", correo, nombre, rol, contrasena);
            const response = await axios.post(`${API_URL}/register`, { correo, nombre, rol, contrasena });
            console.log("Registration response received:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error during registration request:", error.response ? error.response.data : error.message);
            throw error;
        }
    }
};

export default ApiService;
