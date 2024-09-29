import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const ApiService = {
    async login(correo, contrasena) {
        const response = await axios.post(`${API_URL}/login`, { correo, contrasena });
        return response.data;
    }
};

export default ApiService;
