<template>
  <div class="register-card">
    <h2>Crear Cuenta</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label>Usuario:</label>
        <input type="text" v-model="usuario_acceso" required />
      </div>
      <div class="form-group">
        <label>Correo:</label>
        <input type="email" v-model="correo" required />
      </div>
      <div class="form-group">
        <label>Contraseña:</label>
        <input type="password" v-model="contrasena_acceso" required />
      </div>
      <div class="form-group">
        <label>Confirmar Contraseña:</label>
        <input type="password" v-model="confirmarContrasena" required />
      </div>
      <div class="form-group">
        <label>DNI:</label>
        <input type="text" v-model="dni_cliente" required />
      </div>
      <div class="form-group">
        <label>Nombre Completo:</label>
        <input type="text" v-model="nombre_completo_cliente" required />
      </div>
      <div class="form-group">
        <label>Dirección:</label>
        <input type="text" v-model="direccion_cliente" />
      </div>
      <div class="form-group">
        <label>Teléfono:</label>
        <input type="text" v-model="telefono_cliente" />
      </div>
      <button type="submit">Crear Cuenta</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <router-link to="/" class="register-link">Ya tengo una cuenta</router-link>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService';

export default {
  data() {
    return {
      usuario_acceso: '',
      correo: '',
      contrasena_acceso: '',
      confirmarContrasena: '',
      dni_cliente: '',
      nombre_completo_cliente: '',
      direccion_cliente: '',
      telefono_cliente: '',
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    async register() {
      if (this.contrasena_acceso !== this.confirmarContrasena) {
        this.errorMessage = "Las contraseñas no coinciden.";
        return;
      }

      const datos = {
        usuario_acceso: this.usuario_acceso,
        correo: this.correo,
        contrasena_acceso: this.contrasena_acceso,
        dni_cliente: this.dni_cliente,
        nombre_completo_cliente: this.nombre_completo_cliente,
        direccion_cliente: this.direccion_cliente,
        telefono_cliente: this.telefono_cliente
      };

      try {
        const response = await ApiService.registrarUsuario(datos);

        if (response.success) {
          this.successMessage = 'Usuario registrado exitosamente. Ahora puedes iniciar sesión.';
          this.errorMessage = '';
          this.$router.push({ name: 'Login' });
        } else {
          this.errorMessage = response.message;
          this.successMessage = '';
        }
      } catch (error) {
        this.errorMessage = 'Error de servidor';
        this.successMessage = '';
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.register-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 0.5rem;
  background-color: #3a6ea5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}

button:hover {
  background-color: #325d87;
}

.register-link {
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: #3a6ea5;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}

.error {
  color: red;
  margin-top: 10px;
}

.success {
  color: green;
  margin-top: 10px;
}
</style>
