// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importar el router

createApp(App)
    .use(router) // Usar el router
    .mount('#app'); // Montar la aplicación
