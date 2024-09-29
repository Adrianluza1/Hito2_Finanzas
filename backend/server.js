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

    const query = `SELECT * FROM Login WHERE correo = ? AND contrasena = ?`;

    db.query(query, [correo, contrasena], (err, rows) => {
        if (err) {
            console.error("Error ejecutando la consulta:", err.message);
            return res.status(500).json({ message: 'Error en el servidor', error: err.message });
        }

        if (rows.length > 0) {
            res.status(200).json({ message: 'Login exitoso', user: rows[0] });
        } else {
            res.status(401).json({ message: 'Credenciales incorrectas' });
        }
    });
});

// Endpoint para registrar un nuevo usuario
app.post('/api/register', (req, res) => {
    const { correo, nombre, rol, contrasena } = req.body;
    if (!correo || !nombre || !rol || !contrasena) return res.status(400).json({ message: 'Todos los campos son requeridos' });

    // Verificar si el correo ya existe
    db.query("SELECT * FROM Login WHERE correo = ?", [correo], (err, rows) => {
        if (err) return res.status(500).json({ message: 'Error en el servidor', error: err.message });

        if (rows.length > 0) {
            return res.status(409).json({ message: 'El correo ya está registrado' });
        }

        // Insertar el nuevo usuario
        const insertQuery = `INSERT INTO Login (correo, nombre, contrasena, rol) VALUES (?, ?, ?, ?)`;
        db.query(insertQuery, [correo, nombre, contrasena, rol], (err, result) => {
            if (err) {
                console.error("Error al registrar el usuario:", err.message);
                return res.status(500).json({ message: 'Error en el servidor', error: err.message });
            }

            res.status(201).json({ message: 'Usuario registrado exitosamente' });
        });
    });
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
