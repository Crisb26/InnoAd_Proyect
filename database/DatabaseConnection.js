const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Cris93022611184**', // ¡Aquí pon tu contraseña correcta!
    database: 'innoad',
    port: 3306
});

conexion.connect((err) => {
    if (err) {
        console.error('Error de conexión:', err);
        return;
    }
    console.log('¡Conectado exitosamente a la base de datos!');
});

module.exports = conexion;