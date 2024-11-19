const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Servir los archivos estáticos del build de Vue
app.use(express.static(path.join(__dirname, 'dist')));

// Configurar JSON Server
const router = jsonServer.router(path.join(__dirname, 'server', 'db.json'));
const middlewares = jsonServer.defaults();
app.use('/api', middlewares, router);

// Manejar rutas desconocidas redirigiéndolas al frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
