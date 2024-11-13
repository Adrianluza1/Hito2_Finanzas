import DatosService from '../registro/DatosService';
import UserService from '../registro/UserService';
import Calculator from '../registro/Calculator';

/**
 * Clase que genera un reporte consolidado para un usuario específico.
 * Reúne la información del usuario, su cartera, y los cálculos del TCEA.
 */
export default class ReporteGenerator {
    /**
     * Genera el reporte consolidado de un usuario dado su ID.
     * Incluye los datos del usuario, los detalles de la cartera, el TCEA promedio y el detalle de los cálculos.
     *
     * @param {number} usuarioId - ID del usuario para el que se va a generar el reporte.
     * @returns {Object} Reporte consolidado que incluye datos del usuario, cartera y cálculos de TCEA.
     * @throws {Error} Si ocurre un error al generar el reporte.
     */
    static async generarReporte(usuarioId) {
        try {
            // Obtener los datos del usuario
            const usuario = await UserService.obtenerDatosUsuario(usuarioId);

            // Obtener la cartera asociada al usuario
            const cartera = await DatosService.obtenerDatosCartera(usuario.cartera_id);

            // Calcular el TCEA promedio y los detalles de cálculo para cada factura en la cartera
            const { tceaPromedio, detallesCalculo } = Calculator.calcularTCEA(cartera);

            // Convertir los detalles de cálculo en un formato de arreglo para facilitar el manejo
            const detallesArray = Calculator.convertirDetalleEnArray(detallesCalculo);

            // Crear un array con los detalles de cada factura, incluyendo el TCEA y los detalles de cálculo
            const facturasDetalladas = cartera.facturas.map(factura => ({
                ...factura,
                tcea: detallesCalculo.find(detalle => detalle.id === factura.id).tcea,
                detallesCalculo: detallesArray.find(detalle => detalle[0].value === factura.id)
            }));

            // Retornar el reporte consolidado con la información del usuario, la cartera y los cálculos
            return {
                usuario,
                cartera: {
                    ...cartera,
                    facturasDetalladas
                },
                tceaPromedio,
                detalles: detallesCalculo
            };
        } catch (error) {
            console.error("Error al generar el reporte:", error);
            throw error;
        }
    }
}
