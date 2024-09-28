// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Crear la aplicación de Vue
const app = createApp(App);

// Usar el router en la aplicación
app.use(router);

// Montar la aplicación en el elemento con id "app" en index.html
app.mount('#app');
