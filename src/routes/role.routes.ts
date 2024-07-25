import { Router } from "express";
import RoleController from "../controllers/role.controller";

class RoleRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/", RoleController.getAllRoles);
    this.router.get("/:id", RoleController.getRoleById);
    this.router.post("/", RoleController.createRole);
    this.router.put("/:id", RoleController.updateRole);
    this.router.delete("/:id", RoleController.deleteRole);
  }
}

export default new RoleRouter().router;
