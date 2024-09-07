// Función para guardar la configuración de la tasa de descuento
function guardarConfiguracion() {
    const cartera = document.getElementById('cartera').value;
    const tasa = document.getElementById('tasa').value;
    const fecha = document.getElementById('fecha').value;

    if (tasa === '' || fecha === '') {
        mostrarMensaje('Por favor, completa todos los campos.', 'error');
        return;
    }

    // Guardar la configuración en el almacenamiento local o enviar al servidor
    const configuracion = {
        cartera: cartera,
        tasa: parseFloat(tasa),
        fecha: fecha
    };

    // Aquí podrías enviar la configuración a un servidor o guardarla localmente
    console.log('Configuración guardada:', configuracion);
    mostrarMensaje('Configuración guardada correctamente.', 'success');
}

// Función para mostrar mensajes al usuario
function mostrarMensaje(mensaje, tipo) {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.color = tipo === 'error' ? 'red' : 'green';
}
