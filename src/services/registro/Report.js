// src/registro/Report.js
import Calculator from '../registro/Calculator';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(__dirname, '../data/db.json');

export default class Report {
    constructor(db) {
        this.db = db;
        this.calculator = new Calculator(db);
    }

    /**
     * Genera un reporte consolidado de letras y facturas.
     * @param {string} idCartera - El identificador de la cartera para consolidar el reporte.
     * @returns {Object} - Reporte consolidado con detalles de letras y facturas.
     */
    generarReporte(idCartera) {
        const facturas = this.calculator.obtenerDatosFactura(idCartera);
        const letras = this.calculator.obtenerDatosLetra(idCartera);

        const totalFacturas = facturas.length;
        const totalLetras = letras.length;
        const montoFacturasTotal = facturas.reduce((total, factura) => total + factura.monto, 0);
        const montoLetrasTotal = letras.reduce((total, letra) => total + letra.monto, 0);

        const reporte = {
            id_reporte: `R${Math.floor(Math.random() * 10000)}`,
            fecha_reporte: new Date().toISOString().split('T')[0],
            cantidad_total_facturas: totalFacturas,
            cantidad_total_letras: totalLetras,
            monto_facturas_total: montoFacturasTotal.toFixed(2),
            monto_letras_total: montoLetrasTotal.toFixed(2),
            detalle_facturas: facturas.map(factura => ({
                descripcion_factura: factura.descripcion,
                monto: factura.monto.toFixed(2),
                fecha_vencimiento_factura: factura.fecha_vencimiento,
                tasa_descuento_aplicada: factura.tasa_descuento,
                monto_total_descuento: factura.descuento_total.toFixed(2),
                tasa_costo_efectiva_anual: factura.tcea.toFixed(2),
                estado_factura: factura.estado,
            })),
            fecha_informe: new Date().toISOString().split('T')[0]
        };

        this.guardarReporte(reporte);
        return reporte;
    }

    /**
     * Guarda el reporte en la base de datos.
     * @param {Object} reporte - El objeto del reporte a guardar.
     */
    guardarReporte(reporte) {
        const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
        db.reportes = db.reportes || [];
        db.reportes.push(reporte);
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    }
}
