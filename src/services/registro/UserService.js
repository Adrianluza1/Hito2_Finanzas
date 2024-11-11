// src/registro/UserService.js
export default class UserService {
    constructor(db) {
        this.db = db;
    }

    /**
     * Obtiene los datos de un usuario específico.
     * @param {string} idUsuario - El identificador del usuario a obtener.
     * @returns {Object} - Datos del usuario si existe en la base de datos.
     */
    obtenerDatosUsuario(idUsuario) {
        return this.db.usuarios.find((usuario) => usuario.idUsuario === idUsuario);
    }
}
