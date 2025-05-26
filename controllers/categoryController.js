// Enlazamos el servicio (capa) de categoría
const category_services = require('../services/categoryService');

const getCategory = async (req, res) => {
  let id = req.params.categoryId;
  try {
    const category = await category_services.getCategory(id);
    res.status(200).send({status:"OK", data: category});
  } catch (error) {
    res.status(error.status || 500).send({status:"FAILED", data:{ error: error.message }});
  }
};

const getAllCategories = async (req, res) => {
  const allCategories = await category_services.getAllCategories();
  if (allCategories) {
    res.status(200).send({status:"OK", data: allCategories});
  } else {
    res.status(400).send({status:"FAILED", data: null});
  }
};

const getCategoryById = async (req, res) => {
  const id = req.params.id;
  const category = await category_services.getCategoryById(id);
  if (category) {
    res.status(200).send({status:"OK", data: category});
  } else {
    res.status(400).send({status:"FAILED", data: null});
  }
};

const createCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const createdCategory = await category_services.createCategory(name, description);
    if (createdCategory) {
      res.status(200).send({status:"OK", data: createdCategory});
    } else {
      res.status(400).send({status:"FAILED", data: null});
    }
  } catch (error) {
    res.status(500).send({status:"ERROR", message: error.message});
  }
};

const updateCategory = async (req, res) => {
  const { id, name, description } = req.body;
  const updatedCategory = await category_services.updateCategory(id, name, description);
  if (updatedCategory) {
    res.status(200).send({status:"OK", data: updatedCategory});
  } else {
    res.status(400).send({status:"FAILED", data: null});
  }
};

const deleteCategory = async (req, res) => {
  let id = req.params.categoryId;
  const deletedCategory = await category_services.deleteCategory(id);
  if (deletedCategory) {
    res.status(200).send({status:"OK", data: deletedCategory});
  } else {
    res.status(400).send({status:"FAILED", data: null});
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory
};