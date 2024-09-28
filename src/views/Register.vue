<!-- src/views/Register.vue -->
<template>
  <div class="register-container">
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from "../components/login/RegisterForm.vue"; // RUTA RELATIVA

export default {
  name: "RegisterView",
  components: {
    RegisterForm,
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
}
</style>
