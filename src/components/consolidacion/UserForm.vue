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
      const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'));
      if (usuarioLogueado && usuarioLogueado.id) {
        this.usuario = await UserService.obtenerDatosUsuario(usuarioLogueado.id);
        console.log("Usuario cargado:", this.usuario); // Log para verificar datos cargados
      } else {
        console.error("No hay un usuario logueado.");
      }
    } catch (error) {
      console.error("Error al cargar la información del usuario:", error.message);
    }
  }
};
</script>

<style scoped>
.user-form {
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin: 20px;
}
</style>
