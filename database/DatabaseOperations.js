const conexion = require('./DatabaseConnection');

const agregarUsuario = (nombre, correo, contraseña, idRol) => {
    const query = "INSERT INTO usuarios (nombre, correo, contraseña, id_rol) VALUES (?, ?, ?, ?)";
    conexion.query(query, [nombre, correo, contraseña, idRol], (err, resultados) => {
        if (err) {
            console.error("Error al agregar usuario:", err);
        } else {
            console.log("Usuario agregado correctamente:", resultados);
        }
    });
};

module.exports = { agregarUsuario };