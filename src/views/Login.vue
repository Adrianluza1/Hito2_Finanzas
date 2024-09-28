<!-- src/views/Login.vue -->
<template>
  <div class="login-container">
    <LoginForm @login="handleLogin" />
  </div>
</template>

<script>
import LoginForm from "../components/login/LoginForm.vue"; // RUTA RELATIVA (Cambiar en Github) (Referencia .2)
import authService from "../services/Auth.service.js";

export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
  methods: {
    async handleLogin(credentials) {
      try {
        const response = await authService.login(credentials);
        console.log("Login successful:", response);
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
}
</style>
