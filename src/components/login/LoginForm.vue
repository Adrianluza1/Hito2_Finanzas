<template>
  <div class="login-card">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label>Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
    <router-link to="/register" class="register-link">¿No tienes una cuenta? Regístrate</router-link>
  </div>
</template>

<script>
import ApiService from '../../services/ApiService';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        await ApiService.login(this.email, this.password);
        alert('Inicio de sesión exitoso');
        this.$router.push({ name: 'Home' });
      } catch (error) {
        console.error('Error durante el inicio de sesión:', error);
        alert('Usuario o contraseña incorrectos.');
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
</style>
