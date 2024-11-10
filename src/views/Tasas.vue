<template>
  <div class="home-container">
    <header class="home-header">
      <h1>Bienvenido al Sistema de Gestión</h1>
      <nav class="navigation-menu">
        <router-link to="/home">Inicio</router-link>
        <router-link to="/consolidacion">Consolidación de Reporte</router-link>
        <router-link to="/imprimir">Impresión de Reporte</router-link>
      </nav>
    </header>

    <main class="home-content">
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

    <footer class="home-footer">
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
      alert("Configuración de Soles guardada con éxito.");
    },
    saveDolares() {
      alert("Configuración de Dólares guardada con éxito.");
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

.home-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #000000; /* Texto en negro para mayor visibilidad */
  text-align: center;
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
  color: #2b9bb8;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #000000; /* Texto en negro */
}

button {
  width: 100%;
  padding: 10px;
  background-color: #2b9bb8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #49b6d0;
}

.home-footer {
  background-color: #2b9bb8;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
</style>
