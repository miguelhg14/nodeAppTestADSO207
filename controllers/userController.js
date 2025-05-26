// Enlazamos el servicio(capa) de usuario
const user_services = require('../services/userService');


const getUser = async (req, res) => {
  let id = req.params.userId;
  try {
    const user = await user_services.getUser(id);
    res.status(200).send({status:"OK", data : user});
  } catch (error) {
    res.status(error.status || 500).send({status:"FAILED", data:{ error: error.message}})
  }
}

const testUserAPI =  (req, resp) => {
  console.log("TestUserAPI");
  resp.status(200).send({
    "status": "OK",
     "message" : "API user state:available"});
}

const getAllUsers = async   (req, res) => {
    const allUsers = await user_services.getAllUsers();
    if(allUsers){
        res.status(200).send({status:"Ok", data : allUsers}); 
    }else{
        res.status(400).send({status:"Failed", data : null});
    }
};

const getUserById = async (req, res) => {
    const id = req.params.id;
  const user = await user_services.getUserById(id);
  if (user) {
    res.status(200).send({ status: "Ok", data: user });
  }else{
    res.status(400).send({ status: "failed", data: null });
  }
};

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const createdUser = await user_services.createUser(name, email, password);
      if (createdUser) {
        res.status(200).send({ status: "OK", data: createdUser });
      } else {
        res.status(400).send({ status: "FAILED", data: null });
      }
    } catch (error) {
      res.status(500).send({ status: "ERROR", message: error.message });
    }
  }

const updateUser = async (req, res) => {
  const {body} = req;
  const createdUser = await user_services.updateUser(body.name, body.email, body.password);
  if (createdUser) {
    res.status(200).send({ status: "OK", data: createdUser });
  }else{
    res.status(400).send({ status: "FAILED", data: createdUser });
  }
}

const deleteUser = async (req,res) => {
    let id = req.params.userId;
    const deleteUser = await user_services.deleteUser(id);
    if (deletedUser) {
        res.status(200).send({ status: "OK", data: deletedUser });
    }else{
        res.status(400).send({ status: "FAILED", data: deletedUser });}
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUser
};