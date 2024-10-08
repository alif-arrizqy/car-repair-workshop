import type { Application } from "express";
import usersRoutes from "./users.routes";
import passwordRoutes from "./password.routes";
import roleRoutes from "./role.routes";
import jenisKerusakanRoutes from "./jenisKerusakan.routes";

export default function Routes(app: Application) {
  app.get("/", (req, res) => {
    res.send({ message: "Welcome to Car Repair Workshop API" });
  });
  app.use("/api/users", usersRoutes);
  app.use("/api/auth", passwordRoutes);
  app.use("/api/role", roleRoutes);
  app.use("/api/jenis-kerusakan", jenisKerusakanRoutes);
}