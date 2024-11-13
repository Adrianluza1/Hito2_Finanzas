import axios from 'axios';

const API_URL = "http://localhost:3000/user";
const CARTERA_URL = "http://localhost:3000/cartera";

export default {
    // Método para verificar si el usuario ya existe
    async verificarUsuarioExistente(usuario_acceso, correo) {
        try {
            const response = await axios.get(API_URL);
            const usuarios = response.data;
            return usuarios.some(
                user => user.usuario_acceso === usuario_acceso || user.correo === correo
            );
        } catch (error) {
            console.error("Error al verificar usuario:", error);
            return false;
        }
    },

    // Método para el registro de un nuevo usuario
    async registrarUsuario(datos) {
        try {
            const usuarioExistente = await this.verificarUsuarioExistente(datos.usuario_acceso, datos.correo);
            if (usuarioExistente) {
                return { success: false, message: "El usuario o correo ya existe." };
            }

            const response = await axios.post(API_URL, {
                usuario_acceso: datos.usuario_acceso,
                correo: datos.correo,
                contrasena_acceso: datos.contrasena_acceso,
                dni_cliente: datos.dni_cliente,
                nombre_completo_cliente: datos.nombre_completo_cliente,
                direccion_cliente: datos.direccion_cliente,
                telefono_cliente: datos.telefono_cliente
            });

            const nuevoUsuario = response.data;

            // Crear una entrada en cartera para el nuevo usuario
            await axios.post(CARTERA_URL, {
                user_id: nuevoUsuario.id,
                cantidad_total_facturas: 0,
                facturas: [],
                monto_total_facturas: 0.0
            });

            return { success: true, usuario: nuevoUsuario };
        } catch (error) {
            console.error("Error en el registro de usuario:", error);
            return { success: false, message: "Error de servidor" };
        }
    },

    // Método para el inicio de sesión
    async login(usuario_acceso, contrasena_acceso) {
        try {
            const response = await axios.get(API_URL);
            const usuarios = response.data;

            const usuario = usuarios.find(
                user => user.usuario_acceso === usuario_acceso && user.contrasena_acceso === contrasena_acceso
            );

            if (usuario) {
                // Almacenar el usuario en localStorage después del inicio de sesión exitoso
                localStorage.setItem("usuario", JSON.stringify(usuario));
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
