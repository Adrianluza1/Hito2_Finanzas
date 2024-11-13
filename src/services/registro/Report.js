import Calculator from './Calculator';

export default class Report {
    static generarReporte(cartera) {
        const { tceaPromedio, detallesCalculo } = Calculator.calcularTCEA(cartera);

        const reporte = {
            totalFacturas: cartera.cantidad_total_facturas,
            montoTotal: cartera.facturas.reduce((sum, factura) => sum + factura.capital, 0),
            tceaPromedio,
            detalles: detallesCalculo.map(detalle => ({
                id: detalle.id,
                valorNominal: detalle.valorNominal,
                descuentoTotal: detalle.descuentoTotal,
                capital: detalle.capital,
                tasa: detalle.tasa,
                tcea: detalle.tcea
            }))
        };
        console.log("Reporte generado con detalle:", reporte);
        return reporte;
    }
}
