import type { Application } from "express";
import usersRoutes from "./users.routes";

export default function Routes(app: Application) {
  app.get("/", (req, res) => {
    res.send({ message: "Welcome to Car Repair Workshop API" });
  });
  app.use("/api/users", usersRoutes);
}