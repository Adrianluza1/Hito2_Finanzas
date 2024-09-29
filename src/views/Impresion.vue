<!-- src/views/Impresion.vue -->
<template>
  <div class="impresion-container">
    <header class="impresion-header">
      <h1>Bienvenido al Sistema de Gestión</h1>
      <nav class="navigation-menu">
        <router-link to="/home">Inicio</router-link>
        <router-link to="/consolidacion">Consolidación de Reporte</router-link>
        <router-link to="/tasas">Configuración de Tasas</router-link>
      </nav>
    </header>

    <main class="impresion-content">
      <div class="card">
        <h2>Imprimir Reporte Consolidado</h2>
        <button @click="imprimirReporte">Imprimir Reporte</button>
      </div>

      <div class="result-card" v-if="reporteImpreso">
        <h3>Resultado de la Impresión</h3>
        <p>El reporte consolidado ha sido enviado a la impresora.</p>
      </div>
    </main>

    <footer class="impresion-footer">
      © 2024 SI642-2402-SI82 . Todos los derechos reservados.
    </footer>
  </div>
</template>

<script>
export default {
  name: "ImpresionView",
  data() {
    return {
      reporteImpreso: false,
    };
  },
  methods: {
    imprimirReporte() {
      // Simulación de la acción de imprimir el reporte
      this.reporteImpreso = true;
      alert("El reporte consolidado se está imprimiendo.");
    },
  },
};
</script>

<style scoped>
/* Fondo claro siguiendo la paleta */
.impresion-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #b0c4de, #e0eafc); /* Degradado de azul claro a gris muy claro */
}

.impresion-header {
  background-color: #5d8aa8; /* Azul acero más claro */
  color: #ffffff; /* Texto blanco */
  padding: 20px;
  text-align: center;
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
  background-color: #d4e4f7;
  color: #5d8aa8;
}

.impresion-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #34495e;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  width: 80%;
  max-width: 500px;
  text-align: center;
}

.result-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  width: 80%;
  max-width: 500px;
  text-align: center;
}

h2, h3 {
  color: #5d8aa8;
}

button {
  padding: 10px 20px;
  background-color: #5d8aa8; /* Azul acero */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #4a6a85;
}

.impresion-footer {
  background-color: #5d8aa8;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
</style>
