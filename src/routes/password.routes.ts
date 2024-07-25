import { Router } from "express";
import { PasswordController } from "../controllers/password.controller";

class PasswdRouter {
  router = Router();
  controller = new PasswordController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/change-password", this.controller.changePassword);
    this.router.post("/request-reset-password", this.controller.requestResetPassword);
    this.router.post("/reset-password", this.controller.resetPassword);
  }
}

export default new PasswdRouter().router;
