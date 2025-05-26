const db = require('../models');
const { Router } = require('express');
// Creamos el router para poder usar los verbos HTTP
const router = Router(); // Llamamos al método Router de Express

// req => request  => En request llegan los datos del body
// res => response => Se envían los datos hacia el cliente
router.get("/users", (req, res) => {
    res.send({ Title: 'Hello ADSO!' });
});

router.get('/all', async (req, res) => {
    try {
        let users = await db.User.findAll();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send('No se pudieron obtener los usuarios');
    }
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let user = await db.User.findByPk(id);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send('No se pudo obtener el usuario');
    }
});

router.delete('/delete/:id', async (req, res) => {
    let id = req.params.id;
    try {
        await db.User.destroy({
            where: { id }
        });
        res.status(200).send('Usuario eliminado correctamente ');
    } catch (error) {
        res.status(400).send('Usuario no pudo ser eliminado');
    }
});

router.post('/new', async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    try {
        await db.User.create({
            name,
            email,
            password,
        });
        res.status(200).send('Usuario creado');
    } catch (error) {
        res.status(400).send('Usuario no pudo ser creado');
    }
});

module.exports = router;