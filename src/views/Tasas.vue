<!-- src/views/Tasas.vue -->
<template>
  <div class="tasas-container">
    <header class="tasas-header">
      <h1>Bienvenido al Sistema de Gestión</h1>
      <nav class="navigation-menu">
        <router-link to="/home">Inicio</router-link>
        <router-link to="/consolidacion">Consolidación de Reporte</router-link>
        <router-link to="/imprimir">Impresión de Reporte</router-link>
      </nav>
    </header>

    <main class="tasas-content">
      <div class="card">
        <h2>Cartera en Soles</h2>
        <form @submit.prevent="saveSoles">
          <div class="form-group">
            <label for="tasa-soles">Tasa de Descuento (%)</label>
            <input v-model="tasaSoles" type="number" id="tasa-soles" required />
          </div>
          <div class="form-group">
            <label for="fecha-soles">Fecha de Aplicación</label>
            <input v-model="fechaSoles" type="date" id="fecha-soles" required />
          </div>
          <button type="submit">Guardar Configuración Soles</button>
        </form>
      </div>

      <div class="card">
        <h2>Cartera en Dólares</h2>
        <form @submit.prevent="saveDolares">
          <div class="form-group">
            <label for="tasa-dolares">Tasa de Descuento (%)</label>
            <input v-model="tasaDolares" type="number" id="tasa-dolares" required />
          </div>
          <div class="form-group">
            <label for="fecha-dolares">Fecha de Aplicación</label>
            <input v-model="fechaDolares" type="date" id="fecha-dolares" required />
          </div>
          <button type="submit">Guardar Configuración Dólares</button>
        </form>
      </div>
    </main>

    <footer class="tasas-footer">
      © 2024 SI642-2402-SI82 . Todos los derechos reservados.
    </footer>
  </div>
</template>

<script>
export default {
  name: "TasasView",
  data() {
    return {
      tasaSoles: '',
      fechaSoles: '',
      tasaDolares: '',
      fechaDolares: '',
    };
  },
  methods: {
    saveSoles() {
      console.log("Guardando configuración de soles:", this.tasaSoles, this.fechaSoles);
      alert("Configuración de Soles guardada con éxito.");
    },
    saveDolares() {
      console.log("Guardando configuración de dólares:", this.tasaDolares, this.fechaDolares);
      alert("Configuración de Dólares guardada con éxito.");
    },
  },
};
</script>

<style scoped>
/* Fondo claro pero respetando la paleta */
.tasas-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #b0c4de, #e0eafc); /* Degradado de azul claro a gris muy claro */
}

.tasas-header {
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

.tasas-content {
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
  text-align: left;
}

h2 {
  text-align: center;
  color: #5d8aa8;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #5d8aa8; /* Azul acero */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #4a6a85;
}

.tasas-footer {
  background-color: #5d8aa8;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
</style>
