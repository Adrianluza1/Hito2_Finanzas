// database.js
// Carga los archivos de la carpeta .env
require('dotenv').config(); //
const mysql = require('mysql2');

// Conexion con BD MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    // Traten de no cambiar el purto
    // Sino tendremos conflicto a la hora de hacer merge
});

// Conectar a la base de datos
// Prueba de depuracion 1
db.connect((err) => {
    if (err) {
        console.error("Error al conectar con la base de datos MySQL:", err.message);
        process.exit(1);
    } else {
        console.log("Conexión exitosa a la base de datos MySQL");
    }
});

module.exports = db;
