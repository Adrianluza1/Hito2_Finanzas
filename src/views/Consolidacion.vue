<template>
  <div class="home-container">
    <header class="home-header">
      <h1>Bienvenido al Sistema de Gestión</h1>
      <nav class="navigation-menu">
        <router-link to="/home">Inicio</router-link>
        <router-link to="/tasas">Configuración de Tasas</router-link>
        <router-link to="/imprimir">Impresión de Reporte</router-link>
      </nav>
    </header>

    <main class="home-content">
      <div class="card">
        <h2>Consolidar Reporte de Letras/Facturas</h2>
        <button @click="generarConsolidado">Generar Consolidado</button>
      </div>

      <div class="result-card" v-if="resultado">
        <h3>Resultado del Consolidado</h3>
        <pre>{{ resultado }}</pre>
      </div>
    </main>

    <footer class="home-footer">
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
      this.resultado = "Reporte consolidado de letras/facturas:\n- Documento 1: $1,200\n- Documento 2: $3,500\n- Documento 3: $2,750\nTotal: $7,450";
      alert("Consolidado generado con éxito.");
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
  color: #000000; /* Texto en negro para mejor visibilidad */
  text-align: center;
}

.home-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #000000; /* Título en negro */
}

.home-content p {
  max-width: 700px;
  line-height: 1.6;
  color: #000000; /* Texto en negro */
}

.card, .result-card {
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
  color: #2b9bb8;
}

button {
  padding: 10px 20px;
  background-color: #2b9bb8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #49b6d0;
}

input[type="date"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #000000; /* Texto del calendario en negro */
}

.home-footer {
  background-color: #2b9bb8;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
</style>

