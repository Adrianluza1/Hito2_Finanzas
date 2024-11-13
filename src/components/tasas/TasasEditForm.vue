<template>
  <div class="tasas-edit-form">
    <h2>Editar Factura</h2>
    <div class="form-group">
      <label>Fecha de Emisión:</label>
      <input type="date" v-model="factura.fecha_emision" />
    </div>
    <div class="form-group">
      <label>Fecha de Vencimiento:</label>
      <input type="date" v-model="factura.fecha_vencimiento" />
    </div>
    <div class="form-group">
      <label>Capital:</label>
      <input type="number" v-model="factura.capital" step="0.01" />
    </div>
    <div class="form-group">
      <label>Detalle de Factura:</label>
      <input type="text" v-model="factura.detalle_factura" />
    </div>
    <div class="form-group">
      <label>Tasa de Conversión:</label>
      <input type="number" v-model="factura.tasa_conversion_moneda" step="0.01" />
    </div>
    <div class="form-buttons">
      <button @click="guardarCambios">Guardar Cambios</button>
      <button @click="cancelarEdicion" class="cancel-button">Cancelar</button>
    </div>
  </div>
</template>

<script>
import TasaService from "../../services/tasas/TasaService";

export default {
  props: ["factura", "carteraId"],
  methods: {
    async guardarCambios() {
      try {
        console.log("Cartera ID recibido:", this.carteraId);
        console.log("Factura antes de guardar cambios:", this.factura);

        if (!this.carteraId || !this.factura) {
          console.warn("No se pudo actualizar porque 'carteraId' o 'factura' son undefined.");
          return;
        }

        await TasaService.updateFactura(this.carteraId, this.factura);
        console.log("Cambios guardados exitosamente");
        this.$emit("guardarCambios", this.factura);
      } catch (error) {
        console.error("Error al guardar los cambios:", error.message);
      }
    },
    cancelarEdicion() {
      this.$emit("cancelarEdicion");
    }
  }
};
</script>

<style scoped>
.tasas-edit-form {
  width: 100%;
  max-width: 500px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

input[type="text"],
input[type="date"],
input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1rem;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-size: 1rem;
}

button:hover {
  opacity: 0.9;
}

.cancel-button {
  background-color: #888;
}

button:not(.cancel-button) {
  background-color: #2b9bb8;
}
</style>
