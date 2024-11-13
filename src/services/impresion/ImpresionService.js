import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

/**
 * Servicio de exportación de informes en diferentes formatos.
 */
export default class ImpresionService {
    /**
     * Exporta el reporte consolidado en el formato especificado.
     * @param {Object} reporte - Datos del informe consolidado.
     * @param {string} formato - Formato de exportación ("pdf", "word", "excel").
     * @returns {void}
     * @throws {Error} Si el formato no es soportado.
     */
    static exportarReporte(reporte, formato) {
        switch (formato) {
            case "pdf":
                return this.exportarPDF(reporte);
            case "word":
                return this.exportarWord(reporte);
            case "excel":
                return this.exportarExcel(reporte);
            default:
                throw new Error("Formato no soportado");
        }
    }

    /**
     * Exporta el informe consolidado en formato PDF.
     * @param {Object} reporte - Datos del informe consolidado.
     */
    static exportarPDF(reporte) {
        const doc = new jsPDF();
        let y = 10;

        doc.setFontSize(16);
        doc.text("Informe Consolidado", 10, y);
        y += 10;

        doc.setFontSize(12);
        doc.text("Datos del Usuario", 10, y);
        y += 10;
        doc.setFontSize(10);
        doc.text(`Correo: ${reporte.usuario.correo}`, 10, y); y += 6;
        doc.text(`Nombre Completo: ${reporte.usuario.nombre_completo_cliente}`, 10, y); y += 6;
        doc.text(`Dirección: ${reporte.usuario.direccion_cliente}`, 10, y); y += 6;
        doc.text(`Teléfono: ${reporte.usuario.telefono_cliente}`, 10, y); y += 10;

        doc.setFontSize(12);
        doc.text("Datos de la Cartera", 10, y);
        y += 10;
        doc.setFontSize(10);
        doc.text(`ID Cartera: ${reporte.cartera.id}`, 10, y); y += 6;
        doc.text(`Cantidad de Facturas: ${reporte.cartera.facturas.length}`, 10, y); y += 6;
        doc.text(`Monto Total Facturas: ${reporte.cartera.facturas.reduce((total, factura) => total + factura.capital, 0)}`, 10, y); y += 10;

        doc.setFontSize(12);
        doc.text("Cálculos y Resultados", 10, y);
        y += 10;
        doc.setFontSize(10);
        doc.text(`TCEA Promedio: ${reporte.tceaPromedio}%`, 10, y);
        y += 10;

        reporte.cartera.facturasDetalladas.forEach((factura) => {
            doc.setFontSize(12);
            doc.text(`Factura ${factura.id}`, 10, y);
            y += 8;
            doc.setFontSize(10);
            doc.text(`Capital: ${factura.capital}`, 10, y); y += 6;
            doc.text(`Tasa de Conversión: ${factura.tasa_conversion_moneda}`, 10, y); y += 6;
            doc.text(`TCEA: ${factura.tcea}%`, 10, y); y += 8;
        });

        doc.save("InformeConsolidado.pdf");
    }

    /**
     * Exporta el informe consolidado en formato Word.
     * @param {Object} reporte - Datos del informe consolidado.
     */
    static exportarWord(reporte) {
        const contenido = `
      Informe Consolidado

      Datos del Usuario
      Correo: ${reporte.usuario.correo}
      Nombre Completo: ${reporte.usuario.nombre_completo_cliente}
      Dirección: ${reporte.usuario.direccion_cliente}
      Teléfono: ${reporte.usuario.telefono_cliente}

      Datos de la Cartera
      ID Cartera: ${reporte.cartera.id}
      Cantidad de Facturas: ${reporte.cartera.facturas.length}
      Monto Total Facturas: ${reporte.cartera.facturas.reduce((total, factura) => total + factura.capital, 0)}

      Cálculos y Resultados
      TCEA Promedio: ${reporte.tceaPromedio}%

      ${reporte.cartera.facturasDetalladas.map(factura => `
        Factura ${factura.id}
        Capital: ${factura.capital}
        Tasa de Conversión: ${factura.tasa_conversion_moneda}
        TCEA: ${factura.tcea}%
      `).join('\n')}
    `;

        const blob = new Blob([contenido], { type: "application/msword" });
        saveAs(blob, "InformeConsolidado.doc");
    }

    /**
     * Exporta el informe consolidado en formato Excel.
     * @param {Object} reporte - Datos del informe consolidado.
     */
    static exportarExcel(reporte) {
        const wb = XLSX.utils.book_new();

        const datosUsuario = [
            ["Datos del Usuario"],
            ["Correo", reporte.usuario.correo],
            ["Nombre Completo", reporte.usuario.nombre_completo_cliente],
            ["Dirección", reporte.usuario.direccion_cliente],
            ["Teléfono", reporte.usuario.telefono_cliente],
            [],
            ["Datos de la Cartera"],
            ["ID Cartera", reporte.cartera.id],
            ["Cantidad de Facturas", reporte.cartera.facturas.length],
            ["Monto Total Facturas", reporte.cartera.facturas.reduce((total, factura) => total + factura.capital, 0)],
            [],
            ["Cálculos y Resultados"],
            ["TCEA Promedio", `${reporte.tceaPromedio}%`]
        ];

        const detallesFacturas = reporte.cartera.facturasDetalladas.map(factura => ([
            `Factura ${factura.id}`,
            `Capital: ${factura.capital}`,
            `Tasa de Conversión: ${factura.tasa_conversion_moneda}`,
            `TCEA: ${factura.tcea}%`
        ]));

        const wsUsuario = XLSX.utils.aoa_to_sheet(datosUsuario);
        const wsFacturas = XLSX.utils.aoa_to_sheet(detallesFacturas);

        XLSX.utils.book_append_sheet(wb, wsUsuario, "Usuario y Cartera");
        XLSX.utils.book_append_sheet(wb, wsFacturas, "Facturas");

        XLSX.writeFile(wb, "InformeConsolidado.xlsx");
    }
}
