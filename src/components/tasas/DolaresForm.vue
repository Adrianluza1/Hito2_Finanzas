<template>
  <div class="card">
    <h3>Cartera en Dólares</h3>
    <form @submit.prevent="guardarTasaDolares">
      <label for="descuentoDolares">Tasa de Descuento (%)</label>
      <input type="number" id="descuentoDolares" v-model="tasaDolares.descuento" required />

      <label for="fechaAplicacionDolares">Fecha de Aplicación</label>
      <input type="date" id="fechaAplicacionDolares" v-model="tasaDolares.fechaAplicacion" required />

      <label for="diasDescuentoDolares">Días de Descuento</label>
      <input type="number" id="diasDescuentoDolares" v-model="tasaDolares.diasDescuento" required />

      <button type="submit">Guardar Configuración Dólares</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasaDolares: {
        descuento: 0,
        fechaAplicacion: '',
        diasDescuento: 0,
      },
    };
  },
  methods: {
    guardarTasaDolares() {
      // Lógica para guardar la tasa en dólares
    },
  },
};
</script>

<style scoped>
.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 100%;
}

label {
  font-weight: bold;
  color: #2b9bb8;
  display: block;
  margin-top: 10px;
  text-align: left;
}

input[type="date"],
input[type="number"],
input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin-top: 5px;
  box-sizing: border-box;
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
  margin-top: 15px;
}

button:hover {
  background-color: #49b6d0;
}
</style>
