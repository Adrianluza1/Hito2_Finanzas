// src/registro/Calculator.js
/**
 * Calcula los valores relacionados con letras y facturas según los datos ingresados y de la base de datos.
 */

export default class Calculator {
    constructor(db) {
        this.db = db;
    }

    /**
     * Calcula el interés adelantado usando la fórmula:
     * Interés Adelantado = (Monto * Tasa de Descuento * Días de Descuento) / (360 * 100)
     * @param {number} monto - El monto de la factura o letra.
     * @param {number} tasaDescuento - La tasa de descuento aplicada.
     * @param {number} diasDescuento - Los días de descuento aplicados.
     * @returns {number} - El valor del interés adelantado.
     */
    calcularInteresAdelantado(monto, tasaDescuento, diasDescuento) {
        return (monto * tasaDescuento * diasDescuento) / 36000;
    }

    /**
     * Calcula el valor neto utilizando la fórmula:
     * Valor Neto = Monto - Interés Adelantado
     * @param {number} monto - El monto de la factura o letra.
     * @param {number} interesAdelantado - El interés adelantado calculado.
     * @returns {number} - El valor neto de la factura o letra después del descuento.
     */
    calcularValorNeto(monto, interesAdelantado) {
        return monto - interesAdelantado;
    }

    /**
     * Calcula la TCEA (Tasa de Costo Efectivo Anual) usando la fórmula:
     * TCEA = (1 + (Tasa de Descuento * Días de Descuento) / 360)^(360 / Días de Descuento) - 1
     * @param {number} tasaDescuento - La tasa de descuento aplicada.
     * @param {number} diasDescuento - Los días de descuento aplicados.
     * @returns {number} - La TCEA calculada.
     */
    calcularTCEA(tasaDescuento, diasDescuento) {
        return Math.pow((1 + tasaDescuento / 36000), (360 / diasDescuento)) - 1;
    }

    /**
     * Obtiene los datos de una factura específica desde la base de datos usando el idCartera.
     * @param {string} idCartera - El identificador de la cartera para buscar facturas.
     * @returns {Array} - Lista de facturas que pertenecen a la cartera.
     */
    obtenerDatosFactura(idCartera) {
        return this.db.facturas.filter((factura) => factura.idCartera === idCartera);
    }

    /**
     * Obtiene los datos de una letra específica desde la base de datos usando el idCartera.
     * @param {string} idCartera - El identificador de la cartera para buscar letras.
     * @returns {Array} - Lista de letras que pertenecen a la cartera.
     */
    obtenerDatosLetra(idCartera) {
        return this.db.letras.filter((letra) => letra.idCartera === idCartera);
    }
}
