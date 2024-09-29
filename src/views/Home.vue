<!-- src/views/Home.vue -->
<template>
  <div class="home-container">
    <header class="home-header">
      <h1>Bienvenido al Sistema de Gestión</h1>
      <nav class="navigation-menu">
        <router-link to="/tasas">Configuración de Tasas</router-link>
        <router-link to="/consolidacion">Consolidación de Reporte</router-link>
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
/* Fondo claro pero con un toque de profesionalismo */
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #b0c4de, #e0eafc); /* Degradado de azul claro a gris muy claro */
}

.home-header {
  background-color: #5d8aa8; /* Azul acero más claro */
  color: #ffffff; /* Texto blanco */
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
  color: #ffffff; /* Blanco para buen contraste */
  text-decoration: none;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.navigation-menu a:hover {
  background-color: #d4e4f7; /* Azul muy claro en hover */
  color: #5d8aa8; /* Azul acero en hover */
}

.logout-button {
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 5px 10px;
  background-color: #d9534f; /* Rojo más claro y profesional */
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #c9302c;
}

.home-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #34495e; /* Texto en azul grisáceo */
  text-align: center;
}

.home-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #34495e;
}

.home-content p {
  max-width: 700px;
  line-height: 1.6;
  color: #4a4a4a; /* Gris oscuro para mayor legibilidad */
}

.home-footer {
  background-color: #5d8aa8; /* Azul acero claro */
  color: #ffffff; /* Blanco para contraste */
  text-align: center;
  padding: 10px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
</style>
