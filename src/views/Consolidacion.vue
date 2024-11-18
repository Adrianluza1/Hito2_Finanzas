<template>
  <div class="home-container">
    <div class="home-header">
      <h1>Consolidar Reporte de Letras/Facturas</h1>
      <nav class="navigation-menu">
        <router-link to="/home">Inicio</router-link>
        <router-link to="/tasas">Cartera</router-link>
        <router-link to="/consolidacion">Reporte</router-link>
        <router-link to="/imprimir">Resumen</router-link>
      </nav>
    </div>

    <div class="home-content">
      <div class="row-container">
        <div class="card">
          <UserForm />
        </div>
        <div class="card">
          <DatosForm @facturaSeleccionada="seleccionarFactura" />
        </div>
        <div class="card">
          <ReportComponent :factura="facturaSeleccionada" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from '../components/consolidacion/UserForm.vue';
import DatosForm from '../components/consolidacion/DatosForm.vue';
import ReportComponent from '../components/consolidacion/ReportComponent.vue';

export default {
  components: {
    UserForm,
    DatosForm,
    ReportComponent
  },
  data() {
    return {
      facturaSeleccionada: null
    };
  },
  methods: {
    seleccionarFactura(factura) {
      this.facturaSeleccionada = factura;
      console.log("Factura seleccionada para el reporte:", this.facturaSeleccionada);
    }
  }
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
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.row-container {
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
}

.card {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  text-align: center;
}

h1 {
  font-size: 1.8em;
  margin-bottom: 0;
}
</style>
