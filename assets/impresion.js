// Función para imprimir el reporte
function imprimirReporte() {
    // Aquí podrías agregar la lógica para obtener y mostrar el reporte que se va a imprimir
    const reporte = "Este es el reporte consolidado listo para imprimir.";

    // Mostrar el reporte en el div correspondiente
    document.getElementById('reporte-impresion').innerText = reporte;

    // Funcionalidad de impresión
    window.print();
}
