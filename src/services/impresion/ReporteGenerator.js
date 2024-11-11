// ReporteGenerator.js
import ImpresionService from '../impresion/ImpresionService';

export default class ReporteGenerator {
    constructor() {
        this.impresionService = new ImpresionService();
    }

    // Genera el formato del reporte en HTML o formato de impresión
    generarFormatoImpresion() {
        const datos = this.impresionService.obtenerDatosParaImpresion();

        return `
      <h1>Reporte Consolidado</h1>
      <p><strong>Fecha de Impresión:</strong> ${datos.fechaImpresion}</p>
      <p><strong>Nombre:</strong> ${datos.nombreUsuario}</p>
      <p><strong>DNI:</strong> ${datos.dni}</p>
      <p><strong>Dirección:</strong> ${datos.direccion}</p>
      <p><strong>Teléfono:</strong> ${datos.telefono}</p>
      <p><strong>Capital:</strong> ${datos.capital}</p>
      <p><strong>Detalles de Factura:</strong> ${datos.detalleFactura}</p>
      <p><strong>Total Descuento:</strong> ${datos.totalDescuento}</p>
      <p><strong>Valor Neto:</strong> ${datos.valorNeto}</p>
    `;
    }
}
