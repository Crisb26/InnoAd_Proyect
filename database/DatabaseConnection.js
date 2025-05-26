const mysql = require('mysql2');

//configuracion automatica segun donde este si el local o en Railway
const conexion = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',  
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'Cris93022611184**',
    database: process.env.DB_NAME || 'innoad',
    port: process.env.DB_PORT || 3306
});

conexion.connect((err) => {
    if (err) {
        console.error('❌ Error de conexión:', err);
        return;
    }
    console.log('✅ ¡Conectado exitosamente a la base de datos!');

    // ✅ Ver tablas en la BD
    conexion.query('SHOW TABLES', (err, results) => {
        if (err) {
            console.error('❌ Error al consultar:', err);
            return;
        }
        console.log('📌 Tablas en la BD:', results);
    });

    // ✅ Cerrar conexión después de ejecutar la consulta
    conexion.end((err) => {
        if (err) {
            console.error('❌ Error al cerrar conexión:', err);
        } else {
            console.log('✅ Conexión cerrada correctamente.');
        }
    });
});

module.exports = conexion;