const db = require("../../../models");
const { Router } = require("express");
const router = Router();
const categoryController = require("../../../controllers/categoryController");

router.get('/testCategoryAPI', (req, res) => {
    res.send({
        "status": 200,
        "message": "Hello from Categories"
    });
});

// ... existing code ...
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/create', categoryController.createCategory);
router.put('/update/:id', categoryController.updateCategory);
router.delete('/delete/:categoryId', categoryController.deleteCategory);

module.exports = router;