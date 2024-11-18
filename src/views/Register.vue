<template>
  <div class="login-container">
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '../components/login/RegisterForm.vue';

export default {
  components: {
    RegisterForm
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
