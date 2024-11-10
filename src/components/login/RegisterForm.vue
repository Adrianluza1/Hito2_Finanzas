<template>
  <div class="login-card">
    <h2>Crear Cuenta</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label>Nombre:</label>
        <input type="text" v-model="nombre" required />
      </div>
      <div class="form-group">
        <label>Apellido:</label>
        <input type="text" v-model="apellido" required />
      </div>
      <div class="form-group">
        <label>Rol:</label>
        <select v-model="rol" required>
          <option value="user">Usuario</option>
          <option value="admin">Administrador</option>
        </select>
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label>Confirmar Password:</label>
        <input type="password" v-model="confirmPassword" required />
      </div>
      <button type="submit">Crear Cuenta</button>
    </form>
    <router-link to="/" class="register-link">Ya tengo una cuenta</router-link>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService';

export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      rol: 'user',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }
      try {
        await ApiService.register(this.email, this.nombre, this.rol, this.password);
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        this.$router.push({ name: 'Login' });
      } catch (error) {
        console.error('Error durante el registro:', error);
        alert('Error al registrar. Inténtalo de nuevo.');
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

input, select {
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
