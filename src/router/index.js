// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue'; // RUTA RELATIVA
import Register from '../views/Register.vue'; // RUTA RELATIVA
import Home from '../views/Home.vue'; // RUTA RELATIVA
import Tasas from '../views/Tasas.vue'; // RUTA RELATIVA
import Consolidacion from '../views/Consolidacion.vue'; // RUTA RELATIVA
import Imprimir from '../views/Imprimir.vue'; // RUTA RELATIVA

const routes = [
    { path: '/', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/home', name: 'Home', component: Home },
    { path: '/tasas', name: 'Tasas', component: Tasas },
    { path: '/consolidacion', name: 'Consolidacion', component: Consolidacion },
    { path: '/imprimir', name: 'Imprimir', component: Imprimir },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
