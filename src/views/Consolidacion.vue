<!-- src/views/Consolidacion.vue -->
<template>
  <div class="consolidacion-container">
    <header class="consolidacion-header">
      <h1>Bienvenido al Sistema de Gestión</h1>
      <nav class="navigation-menu">
        <router-link to="/home">Inicio</router-link>
        <router-link to="/tasas">Configuración de Tasas</router-link>
        <router-link to="/imprimir">Impresión de Reporte</router-link>
      </nav>
    </header>

    <main class="consolidacion-content">
      <div class="card">
        <h2>Consolidar Reporte de Letras/Facturas</h2>
        <button @click="generarConsolidado">Generar Consolidado</button>
      </div>

      <div class="result-card" v-if="resultado">
        <h3>Resultado del Consolidado</h3>
        <pre>{{ resultado }}</pre>
      </div>
    </main>

    <footer class="consolidacion-footer">
      © 2024 SI642-2402-SI82 . Todos los derechos reservados.
    </footer>
  </div>
</template>

<script>
export default {
  name: "ConsolidacionView",
  data() {
    return {
      resultado: null,
    };
  },
  methods: {
    generarConsolidado() {
      // Simulación del resultado del consolidado
      this.resultado = "Reporte consolidado de letras/facturas:\n- Documento 1: $1,200\n- Documento 2: $3,500\n- Documento 3: $2,750\nTotal: $7,450";
      alert("Consolidado generado con éxito.");
    },
  },
};
</script>

<style scoped>
/* Fondo claro siguiendo la paleta */
.consolidacion-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #b0c4de, #e0eafc); /* Degradado de azul claro a gris muy claro */
}

.consolidacion-header {
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

.consolidacion-content {
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
  text-align: left;
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

pre {
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.consolidacion-footer {
  background-color: #5d8aa8;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
</style>
