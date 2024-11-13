<template>
  <div class="home-container">
    <header class="home-header">
      <h1>Bienvenido al Sistema de Gestión</h1>
      <nav class="navigation-menu">
        <router-link to="/home">Inicio</router-link>
        <router-link to="/tasas">Configuración de Tasas</router-link>
        <router-link to="/consolidacion">Consolidación de Reporte</router-link>
        <router-link to="/imprimir">Impresión de Reporte</router-link>
      </nav>
    </header>

    <main class="home-content">
      <div class="content-wrapper">
        <TasasForm />
      </div>
    </main>

    <footer class="home-footer">
      © 2024 SI642-2402-SI82 . Todos los derechos reservados.
    </footer>
  </div>
</template>

<script>
import TasasForm from "../components/tasas/TasasForm.vue";

export default {
  components: {
    TasasForm
  }
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

.home-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #000000;
  text-align: center;
}

.content-wrapper {
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
  max-width: 1000px;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 100%;
}

button {
  padding: 10px 20px;
  background-color: #2b9bb8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  font-size: 1rem;
}

button:hover {
  background-color: #49b6d0;
}

input[type="date"],
input[type="number"],
input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin-top: 10px;
  box-sizing: border-box;
}

label {
  font-weight: bold;
  color: #2b9bb8;
  display: block;
  margin-top: 10px;
  text-align: left;
}

.home-footer {
  background-color: #2b9bb8;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
</style>