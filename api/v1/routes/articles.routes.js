const db = require("../../../models");
const { Router } = require("express");
const router = Router();
const articleController = require("../../../controllers/articleController");

router.get('/testArticleAPI', (req, res) => {
    res.send({
        "status": 200,
        "message": "Hello from Articles"
    });
});

// ... existing code ...
router.get('/', articleController.getAllArticles);
router.get('/:id', articleController.getArticleById);
router.post('/create', articleController.createArticle);
router.put('/update/:id', articleController.updateArticle);
router.delete('/delete/:articleId', articleController.deleteArticle);

module.exports = router;