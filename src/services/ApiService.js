import axios from 'axios';

// Definición de las URL de la API
const API_URL = "http://localhost:3000/user";
const CARTERA_URL = "http://localhost:3000/cartera";

export default {
    /**
     * Verifica si un usuario con el mismo nombre de usuario o correo ya existe.
     * @param {string} usuario_acceso - Nombre de usuario que se desea verificar.
     * @param {string} correo - Correo electrónico que se desea verificar.
     * @returns {Promise<boolean>} - Retorna `true` si el usuario o correo ya existe, de lo contrario, `false`.
     */
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

    /**
     * Registra un nuevo usuario en el sistema.
     * @param {Object} datos - Objeto con los datos del usuario a registrar.
     * @returns {Promise<Object>} - Retorna un objeto indicando si el registro fue exitoso y el usuario registrado.
     */
    async registrarUsuario(datos) {
        try {
            const usuarioExistente = await this.verificarUsuarioExistente(datos.usuario_acceso, datos.correo);
            if (usuarioExistente) {
                return { success: false, message: "El usuario o correo ya existe." };
            }

            // Registro del usuario en la base de datos
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

            // Crear una entrada en 'cartera' para el nuevo usuario
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

    /**
     * Autentica al usuario en el sistema.
     * @param {string} usuario_acceso - Nombre de usuario.
     * @param {string} contrasena_acceso - Contraseña del usuario.
     * @returns {Promise<Object>} - Retorna un objeto con el resultado del inicio de sesión y los datos del usuario si es exitoso.
     */
    async login(usuario_acceso, contrasena_acceso) {
        try {
            const response = await axios.get(API_URL);
            const usuarios = response.data;

            const usuario = usuarios.find(
                user => user.usuario_acceso === usuario_acceso && user.contrasena_acceso === contrasena_acceso
            );

            if (usuario) {
                // Almacena el usuario en localStorage después de iniciar sesión
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
