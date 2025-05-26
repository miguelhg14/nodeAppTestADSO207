// Llamado e Inicializacion de Dependencias
const express = require('express'); // Se incluye el Framework Express
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express(); // Instancia de Express
// Configuraciones
if (process.env.NODE_ENV !== 'production') {
require('dotenv').config(); 
}
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false })); // Para recibir datos por POST
app.use(bodyParser.json()); // Para recibir formato Json


// Configuracion de rutas del API
app.use('/api/v1/users', require('./api/v1/routes/users.routes')); // Ruta para users con la version 1 de la api
app.use('/api/v1/users', require('./api/v1/routes/articles.routes')); // Ruta para articles con la version 1 de la api
app.use('/api/v1/users', require('./api/v1/routes/categorias.routes')); // Ruta para categorias con la version 1 de la api

// app.get('/', (req, res) => {S
//     res.send({
//         status: 200,
//         message: 'Hello API - NodeJs'
//     })
// });

// app.get('/saludos', (req, res) => {
//     res.send({
//         status: 200,
//         message: 'Hola Js'
//     })
// });

// app.post('/testNewUser', (req, res) =>{
//     console.log(req.body);
//     // const nombre = req.body.nombre;
//     // const email = req.body.edad;
//     // const direccion = req.body.dreccion;
//     // const empresa = req.body.empresa;
//     const { nombre, email, direccion, empresa } = req.body;
//     console.log('Nombre: ${nombre}');
//     console.log('Email: ${email}');
//     console.log('Direccion: ${direccion}');
//     console.log('Empresa: ${empresa}');

//     ret.send({
//         status: 200,
//         message: 'Usuario creado exitosamente!'
//     })
// });

// Se inicia el servidor en el puerto 4000
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')} 👲🧶`);
});