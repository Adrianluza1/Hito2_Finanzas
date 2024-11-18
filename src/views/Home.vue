<template>
  <div class="home-container">
    <header class="home-header">
      <h1>Bienvenido al Sistema de Gestión</h1>
      <nav class="navigation-menu">
        <router-link to="/home">Inicio</router-link>
        <router-link to="/tasas">Cartera</router-link>
        <router-link to="/consolidacion">Reporte</router-link>
        <router-link to="/imprimir">Resumen</router-link>
      </nav>
      <button class="logout-button" @click="handleLogout">Cerrar Sesión</button>
    </header>

    <main class="home-content">
      <img src="@/assets/Logo.webp" alt="Logo" class="logo-image" />
      <p style="font-size: 16px; color: white;">
        <strong>¡Gracias por elegirnos como su aliado en la administración eficiente de sus procesos! </strong>

        <br> Con nuestro sistema, podrá optimizar sus operaciones a través de funcionalidades diseñadas para simplificar
        y automatizar tareas clave, como:
      </p>

      <ul
          style="list-style: none; padding: 0; font-size: 16px; color: #FFFFFF; text-align: left; display: inline-block;">
        <li><span style="color: black;">✔</span> <strong>Configuración de tasas</strong>: Ajuste y gestione las
          tasasegún las necesidades de su negocio con precisión y rapidez.</li>
        <li><span style="color: black;">✔</span> <strong>Conciliación de reportes</strong>: Analice, valide y
          unifique datos para obtener informes claros y confiables.</li>
        <li><span style="color: black;">✔</span> <strong>Impresión profesional</strong>: Genere documentos listos
          para imprimir con un diseño limpio y adaptable a sus estándares.</li>
      </ul>

      <p style="font-size: 16px; color: #FFFFFF;">
        Nuestro objetivo es brindarle una experiencia intuitiva y poderosa para que pueda enfocarse en lo que más
        importa: el crecimiento y éxito de su organización.
      </p>
      <p style="font-size: 16px; color: black;">
        <strong>¡Comencemos a gestionar eficientemente juntos! 🚀</strong>
      </p>
    </main>

    <footer class="home-footer">
      © 2024 SI642-2402-SI82 . Todos los derechos reservados.
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    handleLogout() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(90deg, #2193b0 0%, #67d0e8 100%);
}

.home-header {
  background-color: #2b9bb8;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.logo-image {
  max-width: 150px;
  margin-bottom: 10px;
}

.navigation-menu {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.navigation-menu a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.navigation-menu a:hover {
  background-color: #49b6d0;
  color: #2193b0;
}

.logout-button {
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 5px 10px;
  background-color: #2b9bb8;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #cb2d3e;
}

.home-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #ffffff;
  text-align: center;
}

.home-footer {
  background-color: #2b9bb8;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
</style>
