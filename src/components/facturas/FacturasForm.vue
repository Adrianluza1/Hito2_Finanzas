<template>
<div class="home-container">
  <header class="home-header">
      <h1>Bienvenido al Sistema de Gestión</h1>
      <nav class="navigation-menu">
        <router-link to="/home">Inicio</router-link>
        <router-link to="/tasas">Configuración de Tasas</router-link>
        <router-link to="/consolidacion">Consolidación de Reporte</router-link>
        <router-link to="/imprimir">Impresión de Reporte</router-link>
      </nav>
    </header>
  <div class="factura-form">
    <h2>Registrar Nueva Factura</h2>
    <form @submit.prevent="registrarFactura">
      <div class="form-group">
        <label for="fecha_emision">Fecha de Emisión:</label>
        <input type="date" v-model="nuevaFactura.fecha_emision" required />
      </div>

      <div class="form-group">
        <label for="fecha_vencimiento">Fecha de Vencimiento:</label>
        <input type="date" v-model="nuevaFactura.fecha_vencimiento" required />
      </div>

      <div class="form-group">
        <label for="capital">Capital:</label>
        <input type="number" v-model="nuevaFactura.capital" required />
      </div>

      <div class="form-group">
        <label for="detalle_factura">Detalle de Factura:</label>
        <input type="text" v-model="nuevaFactura.detalle_factura" required />
      </div>

      <div class="form-group">
        <label for="tasa_conversion_moneda">Tasa de Conversión:</label>
        <input type="number" step="0.01" v-model="nuevaFactura.tasa_conversion_moneda" required />
      </div>

      <div class="form-group">
        <label for="fecha_reporte">Fecha de Reporte:</label>
        <input type="date" v-model="nuevaFactura.fecha_reporte" required />
      </div>

      <div class="form-group">
        <label for="descripcion_factura">Descripción de Factura:</label>
        <input type="text" v-model="nuevaFactura.descripcion_factura" required />
      </div>

      <div class="form-group">
        <label for="monto_nominal">Monto Nominal:</label>
        <input type="number" v-model="nuevaFactura.monto_nominal" required />
      </div>

      <div class="form-group">
        <label for="monto_descuento_total">Monto Descuento Total:</label>
        <input type="number" v-model="nuevaFactura.monto_descuento_total" required />
      </div>

      <div class="form-group">
        <label for="tasa_descuento_aplicada">Tasa de Descuento Aplicada:</label>
        <input type="number" step="0.01" v-model="nuevaFactura.tasa_descuento_aplicada" required />
      </div>

      <div class="form-group">
        <label for="dias_restantes_vencimiento">Días Restantes para el Vencimiento:</label>
        <input type="number" v-model="nuevaFactura.dias_restantes_vencimiento" required />
      </div>

      <!-- Botón para registrar la factura -->
      <button type="submit">Registrar Factura</button>

      <!-- Botón para regresar a la vista anterior -->
      <router-link to="/tasas"><button>Volver</button></router-link>
    </form>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      carteraId: 1,
      nuevaFactura: {
        id: null,
        fecha_emision: "",
        fecha_vencimiento: "",
        capital: 0,
        detalle_factura: "",
        tasa_conversion_moneda: 1,
        fecha_reporte: "",
        descripcion_factura: "",
        monto_nominal: 0,
        monto_descuento_total: 0,
        tasa_descuento_aplicada: 0,
        dias_restantes_vencimiento: 0
      }
    };
  },
  methods: {
    async registrarFactura() {
      this.nuevaFactura.id = Math.floor(Math.random() * 1000) + 1;

      try {
        const response = await axios.get(`http://localhost:3000/cartera/${this.carteraId}`);
        const cartera = response.data;

        cartera.facturas.push(this.nuevaFactura);
        cartera.cantidad_total_facturas = cartera.facturas.length;
        cartera.monto_total_facturas += this.nuevaFactura.capital;

        await axios.put(`http://localhost:3000/cartera/${this.carteraId}`, cartera);

        alert("Factura registrada con éxito");
        this.resetFormulario();
      } catch (error) {
        console.error("Error al registrar la factura:", error);
      }
    },
    resetFormulario() {
      this.nuevaFactura = {
        id: null,
        fecha_emision: "",
        fecha_vencimiento: "",
        capital: 0,
        detalle_factura: "",
        tasa_conversion_moneda: 1,
        fecha_reporte: "",
        descripcion_factura: "",
        monto_nominal: 0,
        monto_descuento_total: 0,
        tasa_descuento_aplicada: 0,
        dias_restantes_vencimiento: 0
      };
    },
    volver() {
      this.$router.push("/"); // Ruta de la vista anterior
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
.factura-form {
  max-width: 600px;
  margin: 50px auto;
  padding: 80px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
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
  color: #2193b0;
}
.home-header {
  background-color: #2b9bb8;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
h2 {
  text-align: center;
  color: #343a40;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #495057;
}

input {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ced4da;
}

button {
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #007bff;
  color: white;
  margin-bottom: 10px;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

.btn-back {
  background-color: #6c757d;
  color: white;
}

.btn-back:hover {
  background-color: #5a6268;
}
</style>
