// Creamos el router para poder usar los verbos HTTP
const { Router } = require('express');
// Incluimos nuestro controlador de usuario
const userController = require('../../../controllers/articleController');
const router = Router(); // Llamamos al método Router de Express

// req => request -> En request llegan los datos del body
// res => response -> Se envían los datos hacia el cliente

router.get('/', userController.getAllArticles);

router.get('/:articleId', userController.getArticle);

router.post('/', userController.createArticle);

router.put('/:articleId', userController.updateArticle);

router.delete('/:articleId', userController.deleteArticle);

module.exports = router;


const createArticle = async (req, res) => {
    const { body } = req;
    const createdArticle = await ArticleService.createArticle(body.title, body.content, body.userId);
    if (createdArticle)
        res.status(200).send({ status: "OK", data: createdArticle });
    else
        res.status(400).send({ status: "FAILED", data: createdArticle });
};

const updateArticle = async (req, res) => {
    let id = req.params.articleId;
    const { title, content, userId } = req.body;
    const updatedArticle = await ArticleService.updateArticle(id, title, content, userId);
    if (updatedArticle)
        res.status(200).send({ status: "OK", data: updatedArticle });
    else
        res.status(400).send({ status: "FAILED", data: updatedArticle });
};

const deleteArticle = async (req, res) => {
    let id = req.params.articleId;
    const deletedArticle = await ArticleService.deleteArticle(id);
    if (deletedArticle)
        res.status(200).send({ status: "OK", data: deletedArticle });
    else
        res.status(400).send({ status: "FAILED", data: deletedArticle });
};

module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
};
