// Función para redirigir a diferentes páginas
function navigateTo(page) {
    window.location.href = page;
}

// Función para cerrar sesión
function logout() {
    alert("Sesión cerrada correctamente.");
    window.location.href = "login.html"; // Redirige a la página de inicio de sesión
}
