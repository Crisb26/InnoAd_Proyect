const express = require('express');
const cors = require('cors');
const { agregarUsuario } = require('./database/DatabaseOperations');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/agregarUsuario', (req, res) => {
    const { nombre, correo, contraseña, idRol } = req.body;
    agregarUsuario(nombre, correo, contraseña, idRol);
    res.json({ mensaje: 'Usuario agregado correctamente' });
});

app.listen(8080, () => {
    console.log('Servidor ejecutándose en http://localhost:8080');
});