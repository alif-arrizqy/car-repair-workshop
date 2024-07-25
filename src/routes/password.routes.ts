import { Router } from "express";
import { PasswordController } from "../controllers/password.controller";

class PasswdRouter {
  router = Router();

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/change-password", PasswordController.changePassword);
    this.router.post("/request-reset-password", PasswordController.requestResetPassword);
    this.router.post("/reset-password", PasswordController.resetPassword);
  }
}

export default new PasswdRouter().router;
