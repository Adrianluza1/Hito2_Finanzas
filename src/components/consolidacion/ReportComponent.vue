<template>
  <div class="report-component">
    <h2>Reporte de Cartera</h2>
    <div v-if="reporte">
      <p><strong>Total de Facturas:</strong> {{ reporte.totalFacturas }}</p>
      <p><strong>Monto Total:</strong> {{ reporte.montoTotal }}</p>
      <p><strong>TCEA Promedio:</strong> {{ reporte.tceaPromedio }}%</p>

      <h3>Detalles de Facturas</h3>
      <div v-for="factura in reporte.detalles" :key="factura.id" class="factura-details">
        <h4>Factura {{ factura.id }}</h4>
        <p><strong>Valor Nominal:</strong> {{ factura.valorNominal }}</p>
        <p><strong>Capital:</strong> {{ factura.capital }}</p>
        <p><strong>Tasa:</strong> {{ factura.tasa }}</p>
        <br>
        <p><strong>Descuento Total:</strong> {{ factura.descuentoTotal }}</p>
        <p><strong>Valor Neto:</strong> {{ factura.valorNominal - factura.descuentoTotal }}</p>
        <p><strong>TCEA:</strong> {{ factura.tcea }}</p>
      </div>
    </div>
    <p v-else>Cargando reporte de cartera...</p>
  </div>
</template>

<script>
import Report from '../../services/registro/Report';
import DatosService from '../../services/registro/DatosService';

export default {
  data() {
    return {
      reporte: null,
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
      const cartera = await DatosService.obtenerDatosCartera(carteraId);

      // Genera el reporte con los datos obtenidos
      this.reporte = Report.generarReporte(cartera);
    } catch (error) {
      console.error("Error al cargar el reporte de la cartera:", error.message);
    }
  },
};
</script>

<style scoped>
.report-component {
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

h3 {
  color: #2b9bb8;
  margin-top: 20px;
}

.factura-details {
  background: #f7f9fc;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

.factura-details h4 {
  color: #2b9bb8;
  margin-bottom: 10px;
}

p {
  margin: 5px 0;
}

strong {
  color: #333;
}
</style>
