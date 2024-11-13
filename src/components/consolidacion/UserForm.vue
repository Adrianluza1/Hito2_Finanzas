<template>
  <div class="user-form">
    <h2>Información del Usuario</h2>
    <div v-if="usuario">
      <p><strong>Correo:</strong> {{ usuario.correo }}</p>
      <p><strong>Nombre Completo:</strong> {{ usuario.nombre_completo_cliente }}</p>
      <p><strong>Dirección:</strong> {{ usuario.direccion_cliente }}</p>
      <p><strong>Teléfono:</strong> {{ usuario.telefono_cliente }}</p>
    </div>
    <p v-else>Cargando información del usuario...</p>
  </div>
</template>

<script>
import UserService from '../../services/registro/UserService';

export default {
  data() {
    return {
      usuario: null
    };
  },
  async created() {
    try {
      const usuarioId = 1; // Cambia este ID según el contexto de tu aplicación
      this.usuario = await UserService.obtenerDatosUsuario(usuarioId);
      console.log("Usuario cargado:", this.usuario); // Log para verificar datos cargados
    } catch (error) {
      console.error("Error al cargar la información del usuario:", error.message);
    }
  }
};
</script>

<style scoped>
.user-form {
  padding: 20px;
}
</style>
