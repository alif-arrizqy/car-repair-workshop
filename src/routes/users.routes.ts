import { Router } from "express";
import UsersController from "../controllers/users.controller";

class UserRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/", UsersController.getAllUsers);
    this.router.get("/:id", UsersController.getUserById);
    this.router.post("/", UsersController.createUser);
    this.router.put("/:id", UsersController.updateUser);
    this.router.delete("/:id", UsersController.deleteUser);
  }
}

export default new UserRoutes().router;
