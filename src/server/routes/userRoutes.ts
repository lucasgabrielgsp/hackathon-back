import {Router} from 'express';
import  UserController  from '../controllers/UserController';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/users", userController.createUser)
userRoutes.get("/findall", userController.getAllUsers)
userRoutes.get("/findone/:id", userController.getOneUser)
userRoutes.put("/userupdate/:id", userController.updateUser)
userRoutes.delete("/userdelete/:id", userController.deleteUser)

export default userRoutes;