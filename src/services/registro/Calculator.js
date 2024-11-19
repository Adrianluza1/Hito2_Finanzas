/**
 * Clase Calculator
 *
 * Esta clase proporciona métodos para calcular el TCEA (Tasa de Coste Efectivo Anual) de una cartera,
 * así como para convertir los detalles de los cálculos en un formato de array.
 */
export default class Calculator {
    /**
     * Calcula el TCEA promedio y los detalles de cálculo para cada factura en una cartera.
     *
     * @param {Object} cartera - Objeto de la cartera que contiene una lista de facturas.
     * @returns {Object} - Objeto con el TCEA promedio y un array de detalles de cálculo por factura.
     */
    static calcularTCEA(cartera) {
        let totalTCEA = 0; // Acumulador para el TCEA total
        let detallesCalculo = []; // Array para almacenar los detalles de cada cálculo

        // Iterar sobre cada factura para calcular el TCEA y detalles específicos
        cartera.facturas.forEach(factura => {
            const valorNominal = factura.monto_nominal;
            const descuentoTotal = valorNominal*(factura.tasa_descuento_aplicada * (factura.dias_restantes_vencimiento / 360)).toFixed(4);
            //const descuentoTotal = (factura.tasa * (factura.dias_restantes_vencimiento / 365) );
            const capital = factura.capital;
            const tasa = (valorNominal - descuentoTotal) / capital;

            const tcea = ( ( Math.pow(valorNominal/(valorNominal-descuentoTotal),360/factura.dias_restantes_vencimiento  )-1)*100).toFixed(2); // TCEA en porcentaje


            totalTCEA += parseFloat(tcea);

            // Añadir los detalles de cálculo de esta factura al array
            detallesCalculo.push({
                id: factura.id,
                valorNominal,
                descuentoTotal,
                capital,
                tasa: (tasa * 100).toFixed(2) + "%",
                tcea: tcea + "%"
            });
        });

        // Calcular el TCEA promedio
        const tceaPromedio = (totalTCEA / cartera.facturas.length).toFixed(2); // Promedio de TCEA
        return { tceaPromedio, detallesCalculo };
    }

    /**
     * Convierte los detalles de cálculo de cada factura en un formato de array.
     *
     * @param {Array} detallesCalculo - Array de objetos con detalles de cálculo por factura.
     * @returns {Array} - Array de arrays donde cada uno contiene pares de etiquetas y valores de cálculo.
     */
    static convertirDetalleEnArray(detallesCalculo) {
        return detallesCalculo.map(detalle => [
            { label: "ID Factura", value: detalle.id },
            { label: "Valor Nominal", value: detalle.valorNominal },
            { label: "Descuento Total", value: detalle.descuentoTotal },
            { label: "Capital", value: detalle.capital },
            { label: "Tasa", value: detalle.tasa },
            { label: "TCEA", value: detalle.tcea }
        ]);
    }
}
