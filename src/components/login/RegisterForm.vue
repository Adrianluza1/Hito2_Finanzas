<!-- src/components/RegisterForm.vue -->
<template>
  <div class="register-card">
    <h2>Create Account</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input v-model="confirmPassword" type="password" id="confirmPassword" required />
      </div>
      <button type="submit">Register</button>
      <router-link to="/" class="login-link">Already have an account? Login</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    submitForm() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("User registered with: ", this.email, this.password);
      // Here you can handle registration logic
    },
  },
};
</script>

<style scoped>
.register-card {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
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
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}
.login-link {
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: #4CAF50;
}
</style>
