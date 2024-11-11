<template>
  <div class="card">
    <h3>Cartera en Soles</h3>
    <form @submit.prevent="guardarTasaSoles">
      <label for="descuentoSoles">Tasa de Descuento (%)</label>
      <input type="number" id="descuentoSoles" v-model="tasaSoles.descuento" required />

      <label for="fechaAplicacionSoles">Fecha de Aplicación</label>
      <input type="date" id="fechaAplicacionSoles" v-model="tasaSoles.fechaAplicacion" required />

      <label for="diasDescuentoSoles">Días de Descuento</label>
      <input type="number" id="diasDescuentoSoles" v-model="tasaSoles.diasDescuento" required />

      <button type="submit">Guardar Configuración Soles</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasaSoles: {
        descuento: 0,
        fechaAplicacion: '',
        diasDescuento: 0,
      },
    };
  },
  methods: {
    guardarTasaSoles() {
      // Lógica para guardar la tasa en soles
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
