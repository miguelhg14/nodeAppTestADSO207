const db = require("../../../models");
const { Router } = require("express"); // Destructuracion
// Se crea el route
const router = Router();
const userController = require("../../../controllers/userController");
router.get('/testUserAPI', (req,res) => {
    res.send({
        "status": 200,
        "message": "Hello from Users"
    });
});



router.get('/testUserApi', userController.testUserAPI);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/create', userController.createUser);
router.put('/update/:id', userController.updateUser);
module.exports = router; 