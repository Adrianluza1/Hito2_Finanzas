// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database'); // Importar la conexión de la base de datos

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint para obtener los usuarios
app.get('/api/users', (req, res) => {
    db.query("SELECT * FROM Login", (err, rows) => {
        if (err) return res.status(500).json({ message: 'Error en el servidor', error: err.message });
        res.status(200).json({ users: rows });
    });
});

// Endpoint para iniciar sesión
app.post('/api/login', (req, res) => {
    const { correo, contrasena } = req.body;
    if (!correo || !contrasena) return res.status(400).json({ message: 'Correo y contrasena son requeridos' });

    // Consulta
    // Verificar Usuario

    const query = `SELECT * FROM Login WHERE correo = ? AND contrasena = ?`;

    db.query(query, [correo, contrasena], (err, rows) => {
        if (err) {
            console.error("Error ejecutando la consulta:", err.message);
            return res.status(500).json({ message: 'Error en el servidor', error: err.message });
        }

        // Verificamos si se encontró un usuario
        // Prueba de depuracion 2
        if (rows.length > 0) {
            res.status(200).json({ message: 'Login exitoso', user: rows[0] });
        } else {
            res.status(401).json({ message: 'Credenciales incorrectas' });
        }
    });
});

// Configuración del puerto
// Ejecución del servidor

// Lee el puerto de las variables de entorno o usa 3000 (En caso cambien el puerto)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
