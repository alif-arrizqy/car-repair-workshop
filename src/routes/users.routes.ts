import { Router } from "express";
import UsersController from "../controllers/users.controller";

class UserRoutes {
  router = Router();
  controller = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/", this.controller.getAllUsers);
    this.router.get("/:id", this.controller.getUserById);
    this.router.post("/", this.controller.createUser);
    this.router.put("/:id", this.controller.updateUser);
    this.router.delete("/:id", this.controller.deleteUser);
  }
}

export default new UserRoutes().router;
