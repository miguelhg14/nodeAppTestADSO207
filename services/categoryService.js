const db = require('../models');

const getCategory = async(id) => {
    try {
        let category = await db.Category.findByPk(id);
        return category;
    } catch (error) {
        throw {status:500, message: error.message || "Failed to get category"};
    }
}

const getAllCategories = async () => {
    try {
        const categories = await db.Category.findAll();
        return categories;
    } catch (error) {
        throw new Error("Error al traer categorías> " + error.message);
    }
}

const getCategoryById = async (id) => {
    try {
        const category = await db.Category.findByPk(id);
        return category;
    } catch (error) {
        throw new Error("Error al traer categoría por ID> " + error.message);
    }
}

const createCategory = async (name, description) => {
    try {
        const newCategory = await db.Category.create({ name, description });
        return newCategory;
    } catch (error) {
        throw new Error("Error al crear categoría> " + error.message);
    }
}

const updateCategory = async (id, name, description) => {
    try {
        let updatedCategory = await db.Category.update(
            { name, description },
            { where: { id } }
        );
        return updatedCategory;
    } catch (error) {
        throw new Error("Error al actualizar categoría> " + error.message);
    }
}

const deleteCategory = async (id) => {
    try {
        const deletedCategory = await db.Category.destroy({
            where: { id }
        });
        return deletedCategory;
    } catch (error) {
        throw new Error("Error al eliminar categoría> " + error.message);
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory
};