<template>
  <div class="register-card">
    <h2>Crear Cuenta</h2>
    <div class="form-group">
      <label>Email</label>
      <input type="email" v-model="correo" required />
    </div>
    <div class="form-group">
      <label>Nombre de Usuario</label>
      <input type="text" v-model="nombre" required />
    </div>
    <div class="form-group">
      <label>Rol</label>
      <select v-model="rol" required>
        <option value="Usuario">Usuario</option>
        <option value="Administrador">Administrador</option>
      </select>
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" v-model="contrasena" required />
    </div>
    <div class="form-group">
      <label>Confirmar Password</label>
      <input type="password" v-model="confirmarContrasena" required />
    </div>
    <button @click="register">Crear Cuenta</button>
    <p class="login-link" @click="goToLogin">Ya tengo una cuenta</p>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService';

export default {
  data() {
    return {
      correo: '',
      nombre: '',
      rol: 'Usuario',
      contrasena: '',
      confirmarContrasena: '',
      error: '',
    };
  },
  methods: {
    async register() {
      if (this.contrasena !== this.confirmarContrasena) {
        this.error = 'Las contraseñas no coinciden';
        return;
      }

      try {
        await ApiService.register(this.correo, this.nombre, this.rol, this.contrasena);
        alert('Registro exitoso. Ahora inicia sesión con tus credenciales.');
        this.$router.push('/login'); // Redirige al inicio de sesión
      } catch (error) {
        this.error = error.response?.data?.message || "Error de conexión";
      }
    },
    goToLogin() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
/* Estilos personalizados de la página de registro */
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

.login-link {
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: #3a6ea5;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}

.error-message {
  color: red;
  text-align: center;
}
</style>
