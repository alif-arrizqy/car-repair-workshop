import express,{ type Application } from "express";
import cors, { type CorsOptions } from "cors";
import { PrismaClient } from "@prisma/client";
import Routes from "./routes";

const prisma = new PrismaClient();

class Server {
  constructor(app: Application) {
    this.config(app);
    Routes(app);
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: "*",
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }
}

export { Server, prisma }