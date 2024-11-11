<template>
  <div class="home-container">
    <header class="home-header">
      <h1>Bienvenido al Sistema de Gestión</h1>
      <nav class="navigation-menu">
        <router-link to="/home">Inicio</router-link>
        <router-link to="/tasas">Configuración de Tasas</router-link>
        <router-link to="/consolidacion">Consolidacion de Reporte</router-link>
        <router-link to="/imprimir">Impresión de Reporte</router-link>
      </nav>
      <button class="logout-button" @click="handleLogout">Cerrar Sesión</button>
    </header>

    <main class="home-content">
      <h2>Bienvenido</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum aliquam
        aliquet. In mattis a sapien id pharetra. Maecenas blandit sem justo. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Suspendisse iaculis ornare sem ut interdum. Duis luctus pulvinar nunc, a ornare magna
        facilisis et. In elementum congue purus, in consequat leo pellentesque at. Maecenas
        lobortis neque aliquam orci accumsan, ac gravida enim imperdiet. Praesent sed ligula
        eros. Sed eleifend sollicitudin dui vitae auctor. In ipsum nisi, maximus et tincidunt
        a, posuere efficitur mauris. Nulla facilisi.
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
  background-color: #2b9bb8; /* Color intermedio de la paleta */
  color: #ffffff;
  padding: 20px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
  background-color: #49b6d0; /* Azul claro en hover */
  color: #2193b0; /* Azul fuerte para contraste */
}

.logout-button {
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 5px 10px;
  background-color: #2b9bb8; /* Azul claro de la paleta */
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #cb2d3e; /* Azul un poco más oscuro */
}

.home-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #ffffff; /* Texto en blanco para mejor visibilidad */
  text-align: center;
}

.home-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ffffff; /* Título en blanco */
}

.home-content p {
  max-width: 700px;
  line-height: 1.6;
  color: #ffffff; /* Texto en blanco */
}

.home-footer {
  background-color: #2b9bb8; /* Color del encabezado para coherencia */
  color: #ffffff;
  text-align: center;
  padding: 10px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
</style>
