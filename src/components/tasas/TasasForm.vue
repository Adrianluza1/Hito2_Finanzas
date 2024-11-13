<template>
  <div class="tasas-container">
    <div class="tasas-form">
      <h2>Configuración de Facturas</h2>
      <div v-if="facturas && facturas.length > 0">
        <div v-for="(factura, index) in facturas" :key="index" class="factura-card" @click="seleccionarFactura(factura)">
          <h3>Factura {{ index + 1 }}</h3>
          <div class="factura-detail">
            <div class="detail-item">
              <strong>Fecha de Emisión:</strong> <span>{{ factura.fecha_emision }}</span>
            </div>
            <div class="detail-item">
              <strong>Fecha de Vencimiento:</strong> <span>{{ factura.fecha_vencimiento }}</span>
            </div>
            <div class="detail-item">
              <strong>Capital:</strong> <span>{{ factura.capital }}</span>
            </div>
            <div class="detail-item">
              <strong>Detalle de Factura:</strong> <span>{{ factura.detalle_factura }}</span>
            </div>
            <div class="detail-item">
              <strong>Tasa de Conversión:</strong> <span>{{ factura.tasa_conversion_moneda }}</span>
            </div>
            <div class="detail-item">
              <strong>Fecha de Reporte:</strong> <span>{{ factura.fecha_reporte }}</span>
            </div>
            <div class="detail-item">
              <strong>Descripción:</strong> <span>{{ factura.descripcion_factura }}</span>
            </div>
            <div class="detail-item">
              <strong>Monto Nominal:</strong> <span>{{ factura.monto_nominal }}</span>
            </div>
            <div class="detail-item">
              <strong>Descuento Total:</strong> <span>{{ factura.monto_descuento_total }}</span>
            </div>
            <div class="detail-item">
              <strong>Tasa de Descuento Aplicada:</strong> <span>{{ factura.tasa_descuento_aplicada }}</span>
            </div>
            <div class="detail-item">
              <strong>Días Restantes para Vencimiento:</strong> <span>{{ factura.dias_restantes_vencimiento }}</span>
            </div>
          </div>
        </div>
      </div>
      <p v-else>No hay facturas asociadas a este usuario.</p>
    </div>

    <!-- Componente de edición de factura, se muestra al costado -->
    <TasasEditForm v-if="facturaSeleccionada" :carteraId="carteraId" :factura="facturaSeleccionada" @guardarCambios="guardarCambios" @cancelarEdicion="cancelarEdicion" />
  </div>
</template>

<script>
import TasaService from "../../services/tasas/TasaService";
import TasasEditForm from "./TasasEditForm.vue";

export default {
  components: { TasasEditForm },
  data() {
    return {
      facturas: [],
      carteraId: null,
      userId: null,
      facturaSeleccionada: null,
      errorMessage: ""
    };
  },
  async created() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario && usuario.id) {
      this.userId = usuario.id;
      await this.cargarCartera();
    } else {
      this.errorMessage = "No se encontró el usuario logueado.";
    }
  },
  methods: {
    async cargarCartera() {
      try {
        const cartera = await TasaService.getCarterasByUsuario(this.userId);
        if (cartera && cartera.facturas) {
          this.carteraId = cartera.id;
          this.facturas = cartera.facturas;
        } else {
          this.errorMessage = "No se encontraron facturas para este usuario.";
        }
      } catch (error) {
        console.error("Error al cargar la cartera:", error.message);
        this.errorMessage = "Error al cargar la cartera.";
      }
    },
    seleccionarFactura(factura) {
      this.facturaSeleccionada = { ...factura };
      console.log("Factura seleccionada para edición:", this.facturaSeleccionada);
    },
    async guardarCambios(facturaEditada) {
      try {
        await TasaService.updateFactura(this.carteraId, facturaEditada);
        await this.cargarCartera();
        this.facturaSeleccionada = null;
      } catch (error) {
        console.error("Error al guardar los cambios:", error.message);
      }
    },
    cancelarEdicion() {
      this.facturaSeleccionada = null;
    }
  }
};
</script>

<style scoped>
.tasas-container {
  display: flex;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.tasas-form {
  flex: 1;
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
}

.factura-card {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  transition: background-color 0.3s;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
}

.factura-card:hover {
  background-color: #e6f7ff;
}

.factura-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
}

h3 {
  color: #2b9bb8;
  text-align: center;
  margin-bottom: 15px;
}
</style>
