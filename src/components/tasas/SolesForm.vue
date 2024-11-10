<template>
  <div class="card">
    <h2>Cartera en Soles</h2>
    <form @submit.prevent="saveSoles">
      <div class="form-group">
        <label>Tasa de Descuento (%)</label>
        <input v-model="tasaSoles" type="number" required />
      </div>
      <div class="form-group">
        <label>Fecha de Aplicación</label>
        <input v-model="fechaSoles" type="date" required />
      </div>
      <div class="form-group">
        <label>Días de Descuento</label>
        <input v-model="diasDescuentoSoles" type="number" required />
      </div>
      <button type="submit">Guardar Configuración Soles</button>
    </form>
  </div>
</template>

<script>
import TasaService from "@/services/tasas/TasaService";

export default {
  name: "SolesForm",
  data() {
    return {
      tasaSoles: '',
      fechaSoles: '',
      diasDescuentoSoles: '',
    };
  },
  async mounted() {
    const idUsuario = "1";
    const carteraSoles = await TasaService.getTasaByCartera(idUsuario, "soles");
    this.tasaSoles = carteraSoles.tasa;
    this.fechaSoles = carteraSoles.fechaAplicacion;
    this.diasDescuentoSoles = carteraSoles.diasDescuento;
  },
  methods: {
    async saveSoles() {
      const idUsuario = "1";
      await TasaService.saveTasa(idUsuario, "soles", this.tasaSoles, this.fechaSoles, this.diasDescuentoSoles);
      alert("Configuración de Soles guardada con éxito.");
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
