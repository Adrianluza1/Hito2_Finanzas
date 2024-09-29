<!-- src/views/Register.vue -->
<template>
  <div class="register-container">
    <div class="register-card">
      <h2>Crear Cuenta</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirmar Password</label>
          <input v-model="confirmPassword" type="password" id="confirmPassword" required />
        </div>
        <button type="submit">Crear Cuenta</button>
        <router-link to="/" class="login-link">Ya tengo una cuenta</router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
        return;
      }
      console.log("Registro exitoso con:", this.email, this.password);
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
/* Estilo para el fondo degradado más visible */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #4a90e2, #b0c4de); /* Degradado de azul medio a azul claro */
}

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
</style>
