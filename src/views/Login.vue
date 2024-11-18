<template>
  <div class="login-container">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../components/login/LoginForm.vue';

export default {
  components: {
    LoginForm
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #4a90e2, #6fb3d2); /* Degradado más suave */
}
</style>
