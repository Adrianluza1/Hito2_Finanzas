<template>
  <div class="login-card">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label>Usuario:</label>
        <input type="text" v-model="usuario_acceso" required />
      </div>
      <div class="form-group">
        <label>Contraseña:</label>
        <input type="password" v-model="contrasena_acceso" required />
      </div>
      <button type="submit">Ingresar</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <router-link to="/register" class="register-link">Crear una cuenta</router-link>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService';

export default {
  data() {
    return {
      usuario_acceso: '',
      contrasena_acceso: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await ApiService.login(this.usuario_acceso, this.contrasena_acceso);

        if (response.success) {
          this.$router.push({ name: 'Home' });
        } else {
          this.errorMessage = response.message;
        }
      } catch (error) {
        this.errorMessage = 'Error de servidor';
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.login-card {
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
</style>
