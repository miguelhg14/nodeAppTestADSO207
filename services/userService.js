const db = require('../models');

const getUser = async(id) => {
    try {
        let user = await db.user.findByPk(id);
        return user;
    } catch (error) {
        throw{status:500, message:error.message || "Failed to get user"};
    }
}


const getAllUsers = async () => {
    try {
        console.log('test service')
        const users = await db.User.findAll();
        return users;
    } catch (error) {
        throw new Error("Error al traer usuarios> " + error.message);
    }
}



const getUserById = async (id) => {
    try {
        const user = await db.User.findByPk(id);
        return user;
    } catch (error) {
        throw new Error("Error al traer usuario por ID> " + error.message);
    }
}

const createArticle = async (title, content, UserId) => {
    try {
      let newArticle = await db.Article.create({
        title,
        content,
        UserId
      });
  
      if (newArticle) {
        const categories = [1, 2, 3];
        await newArticle.setCategories(categories);
      }
  
      return newArticle;
    } catch (error) {
      return error.message || "Articulo no creadoc";
    }
  };
  
const updateUser = async (id, name, email, password) => {
    try {
        let updateUser = await db.User.update({ 
            name, 
            email, 
            password 

        },
            { where: {
                 id, 
            } 
        });
        return updateUser;
    } catch (error) {
        throw new Error("Error al actualizar usuario> " + error.message);}
}

const deleteUser = async (id) => {
    try {
       const deletedUser = await db.User.destroy({
            where: {
                id,
            },
        });
        return deletedUser;
    } catch (error) {
        throw new Error("Error al eliminar usuario> " + error.message);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUser
};