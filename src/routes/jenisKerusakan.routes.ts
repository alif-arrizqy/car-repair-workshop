import { Router } from "express";
import JenisKerusakanController from "../controllers/jenisKerusakan.controller";

class JenisKerusakanRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", JenisKerusakanController.createJenisKerusakan);
    this.router.get("/", JenisKerusakanController.getAllJenisKerusakan);
    this.router.get("/:id", JenisKerusakanController.getJenisKerusakanById);
    this.router.put("/:id", JenisKerusakanController.updateJenisKerusakan);
    this.router.delete("/:id", JenisKerusakanController.deleteJenisKerusakan);
  }
}

export default new JenisKerusakanRoutes().router;