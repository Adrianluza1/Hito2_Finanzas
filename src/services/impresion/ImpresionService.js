// ImpresionService.js
import Report from '../registro/Report';

export default class ImpresionService {
    constructor(report) {
        this.report = report || new Report();
    }

    // Genera los datos necesarios para la impresión
    obtenerDatosParaImpresion() {
        // Obtiene los datos calculados y otros detalles del reporte
        const datosReporte = this.report.obtenerDatosReporte();

        return {
            ...datosReporte,
            fechaImpresion: new Date().toLocaleDateString(),
        };
    }
}
