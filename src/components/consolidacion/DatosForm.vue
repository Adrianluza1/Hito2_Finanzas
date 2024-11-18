<template>
  <div class="datos-form">
    <h2>Datos de Cartera</h2>
    <div v-if="cartera">
      <p><strong>ID Cartera:</strong> {{ cartera.id }}</p>
      <p><strong>Cantidad de Facturas:</strong> {{ cartera.cantidad_total_facturas }}</p>
      <p><strong>Monto Total Facturas:</strong> {{ calcularMontoTotal(cartera.facturas) }}</p>
      <div v-for="(factura, index) in cartera.facturas" :key="index" class="factura-card">
        <h3>Factura {{ index + 1 }}</h3>
        <p><strong>Fecha de Emisión:</strong> {{ factura.fecha_emision }}</p>
        <p><strong>Fecha de Vencimiento:</strong> {{ factura.fecha_vencimiento }}</p>
        <p><strong>Capital:</strong> {{ factura.capital }}</p>
        <p><strong>Detalle de Factura:</strong> {{ factura.detalle_factura }}</p>
        <p><strong>Tasa de Conversión:</strong> {{ factura.tasa_conversion_moneda }}</p>
        <p><strong>Fecha de Reporte:</strong> {{ factura.fecha_reporte }}</p>
        <p><strong>Descripción:</strong> {{ factura.descripcion_factura }}</p>
        <p><strong>Monto Nominal:</strong> {{ factura.monto_nominal }}</p>
        <p><strong>Descuento Total:</strong> {{ factura.monto_descuento_total }}</p>
        <p><strong>Tasa de Descuento Aplicada:</strong> {{ factura.tasa_descuento_aplicada }}</p>
        <p><strong>Días Restantes para Vencimiento:</strong> {{ factura.dias_restantes_vencimiento }}</p>
      </div>
    </div>
    <p v-else>Cargando datos de la cartera...</p>
  </div>
</template>

<script>
import DatosService from '../../services/registro/DatosService';

export default {
  data() {
    return {
      cartera: null,
    };
  },
  async created() {
    try {
      // Obtén el usuario logueado desde localStorage
      const usuario = JSON.parse(localStorage.getItem("usuario"));
      if (!usuario || !usuario.cartera_id) {
        console.error("Usuario no encontrado o sin cartera asignada.");
        return;
      }

      // Usa el ID de la cartera del usuario logueado para obtener los datos
      const carteraId = usuario.cartera_id;
      this.cartera = await DatosService.obtenerDatosCartera(carteraId);
    } catch (error) {
      console.error("Error al cargar los datos de la cartera:", error.message);
    }
  },
  methods: {
    calcularMontoTotal(facturas) {
      return facturas.reduce((total, factura) => total + factura.capital, 0);
    },
  },
};
</script>

<style scoped>
.datos-form {
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  color: #2b9bb8;
  text-align: center;
  margin-bottom: 20px;
}

.factura-card {
  background-color: #e6f7ff;
  padding: 15px;
  margin-top: 15px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.factura-card h3 {
  color: #2b9bb8;
}

p {
  margin: 5px 0;
}

strong {
  color: #333;
}
</style>
