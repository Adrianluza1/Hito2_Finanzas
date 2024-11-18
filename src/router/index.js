// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue'; // RUTA RELATIVA
import Register from '../views/Register.vue'; // RUTA RELATIVA
import Home from '../views/Home.vue'; // RUTA RELATIVA
import Tasas from '../views/Tasas.vue';
import Consolidacion from '../views/Consolidacion.vue';
import Imprimir from '../views/Impresion.vue';
import Facturas from '../components/facturas/FacturasForm.vue';


const routes = [
    { path: '/', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/home', name: 'Home', component: Home },
    { path: '/tasas', name: 'Tasas', component: Tasas },
    { path: '/consolidacion', name: 'Consolidacion', component: Consolidacion },
    { path: '/imprimir', name: 'Imprimir', component: Imprimir },
    { path: '/facturas', name: 'Facturas', component: Facturas },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
