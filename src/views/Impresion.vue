<template>
  <div class="home-container">
    <header class="home-header">
      <h1>Consolidar Reporte de Letras/Facturas</h1>
      <nav class="navigation-menu">
        <router-link to="/home">Inicio</router-link>
        <router-link to="/tasas">Configuración de Tasas</router-link>
        <router-link to="/consolidacion">Consolidación de Reporte</router-link>
        <router-link to="/imprimir">Impresión de Reporte</router-link>
      </nav>
    </header>

    <main class="home-content">
      <div class="report-card">
        <h2>Informe Consolidado</h2>
        <div v-if="reporte">
          <section>
            <h3>Datos del Usuario</h3>
            <p><strong>Correo:</strong> {{ reporte.usuario.correo }}</p>
            <p><strong>Nombre Completo:</strong> {{ reporte.usuario.nombre_completo_cliente }}</p>
            <p><strong>Dirección:</strong> {{ reporte.usuario.direccion_cliente }}</p>
            <p><strong>Teléfono:</strong> {{ reporte.usuario.telefono_cliente }}</p>
          </section>

          <section>
            <h3>Datos de la Cartera</h3>
            <p><strong>ID Cartera:</strong> {{ reporte.cartera.id }}</p>
            <p><strong>Cantidad de Facturas:</strong> {{ reporte.cartera.facturas.length }}</p>
            <p><strong>Monto Total Facturas:</strong> {{ reporte.cartera.facturas.reduce((total, factura) => total + factura.capital, 0) }}</p>
          </section>

          <section>
            <h3>Cálculos y Resultados</h3>
            <p><strong>TCEA Promedio:</strong> {{ reporte.tceaPromedio }}%</p>
            <div v-for="factura in reporte.cartera.facturasDetalladas" :key="factura.id" class="factura-detail">
              <h4>Factura {{ factura.id }}</h4>
              <p><strong>Fecha de Emisión:</strong> {{ factura.fecha_emision }}</p>
              <p><strong>Fecha de Vencimiento:</strong> {{ factura.fecha_vencimiento }}</p>
              <p><strong>Capital:</strong> {{ factura.capital }}</p>
              <p><strong>Tasa de Conversión:</strong> {{ factura.tasa_conversion_moneda }}</p>
              <p><strong>TCEA:</strong> {{ factura.tcea }}%</p>
              <h5>Detalles del Cálculo:</h5>
              <ul>
                <li v-for="detalle in factura.detallesCalculo" :key="detalle.label">
                  <strong>{{ detalle.label }}:</strong> {{ detalle.value }}
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div class="button-group">
          <button @click="exportarReporte('pdf')">Exportar como PDF</button>
          <button @click="exportarReporte('word')">Exportar como Word</button>
          <button @click="exportarReporte('excel')">Exportar como Excel</button>
        </div>
      </div>
    </main>

    <footer class="home-footer">
      © 2024 SI642-2402-SI82. Todos los derechos reservados.
    </footer>
  </div>
</template>

<script>
import ImpresionService from "../services/impresion/ImpresionService";
import ReporteGenerator from "../services/impresion/ReporteGenerator";

export default {
  data() {
    return {
      reporte: null,
    };
  },
  async created() {
    const usuarioId = 1; // Cambiar según el contexto
    this.reporte = await ReporteGenerator.generarReporte(usuarioId);
  },
  methods: {
    async exportarReporte(formato) {
      try {
        await ImpresionService.exportarReporte(this.reporte, formato);
        alert(`El reporte consolidado ha sido exportado en formato ${formato.toUpperCase()}.`);
      } catch (error) {
        console.error(`Error al exportar el reporte en formato ${formato}:`, error);
      }
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
}

.home-content {
  display: flex;
  justify-content: center;
  padding: 20px;
  color: #000000;
  text-align: center;
}

.report-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 700px;
  width: 100%;
  text-align: center;
}

.button-group {
  display: flex;
  gap: 20px; /* Añadido más espacio entre los botones */
  justify-content: center;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  background-color: #2b9bb8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #49b6d0;
}

.factura-detail {
  background: #f0f8ff;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
  text-align: left;
}

h3, h4 {
  color: #2b9bb8;
}
</style>
