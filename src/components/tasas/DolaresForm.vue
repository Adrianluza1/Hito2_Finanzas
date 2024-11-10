<template>
  <div class="card">
    <h2>Cartera en Dólares</h2>
    <form @submit.prevent="saveDolares">
      <div class="form-group">
        <label>Tasa de Descuento (%)</label>
        <input v-model="tasaDolares" type="number" required />
      </div>
      <div class="form-group">
        <label>Fecha de Aplicación</label>
        <input v-model="fechaDolares" type="date" required />
      </div>
      <div class="form-group">
        <label>Días de Descuento</label>
        <input v-model="diasDescuentoDolares" type="number" required />
      </div>
      <button type="submit">Guardar Configuración Dólares</button>
    </form>
  </div>
</template>

<script>
import TasaService from "@/services/tasas/TasaService";

export default {
  name: "DolaresForm",
  data() {
    return {
      tasaDolares: '',
      fechaDolares: '',
      diasDescuentoDolares: '',
    };
  },
  async mounted() {
    const idUsuario = "1";
    const carteraDolares = await TasaService.getTasaByCartera(idUsuario, "dolares");
    this.tasaDolares = carteraDolares.tasa;
    this.fechaDolares = carteraDolares.fechaAplicacion;
    this.diasDescuentoDolares = carteraDolares.diasDescuento;
  },
  methods: {
    async saveDolares() {
      const idUsuario = "1";
      await TasaService.saveTasa(idUsuario, "dolares", this.tasaDolares, this.fechaDolares, this.diasDescuentoDolares);
      alert("Configuración de Dólares guardada con éxito.");
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
  max-width: 400px;
  text-align: left;
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
  color: #000000;
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
</style>
