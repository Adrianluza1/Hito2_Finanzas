// services/tasas/TCEACalculator.js

/**
 * Clase para calcular la Tasa de Costo Efectiva Anual (TCEA).
 * La TCEA es una medida estandarizada que permite comparar diferentes tasas
 * efectivas de varios instrumentos financieros en un solo año.
 */
export default class TCEACalculator {
    /**
     * Calcula la TCEA promedio basado en facturas y letras.
     * @param {Array} facturas - Array de objetos de facturas, cada uno debe tener 'monto' y 'tasaEfectiva'.
     * @param {Array} letras - Array de objetos de letras, cada uno debe tener 'monto' y 'tasaEfectiva'.
     * @returns {Object} - Retorna un objeto con la TCEA calculada y el monto total.
     */
    static calculateTCEA(facturas, letras) {
        let totalMonto = 0;
        let totalTasaEfectiva = 0;

        // Acumulamos el monto y la tasa efectiva de cada factura
        facturas.forEach((factura) => {
            totalMonto += factura.monto;
            totalTasaEfectiva += factura.tasaEfectiva;
        });

        // Acumulamos el monto y la tasa efectiva de cada letra
        letras.forEach((letra) => {
            totalMonto += letra.monto;
            totalTasaEfectiva += letra.tasaEfectiva;
        });

        // Calculamos la tasa efectiva promedio
        const promedioTasaEfectiva = totalTasaEfectiva / (facturas.length + letras.length);

        // Aquí asumimos que el promedio de la tasa efectiva es una aproximación de la TCEA
        const tcea = promedioTasaEfectiva;

        return {
            tcea,
            totalMonto,
        };
    }
}
