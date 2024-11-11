// src/registro/ValidationService.js
export default class ValidationService {
    constructor(db) {
        this.db = db;
    }

    /**
     * Valida si existen datos necesarios para generar un reporte de una cartera específica.
     * @param {string} idCartera - El identificador de la cartera a validar.
     * @returns {boolean} - True si los datos son válidos, false en caso contrario.
     */
    validarDatosParaReporte(idCartera) {
        const cartera = this.db.carteras.find((cartera) => cartera.idCartera === idCartera);
        return cartera && cartera.tasa && cartera.fechaAplicacion;
    }
}
