import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import userSchemas from "./user.swagger";
import roleSchemas from "./role.swagger";
import responseSchemas from "./response.swagger";
import authSchemas from "./auth.swagger";
import JenisKerusakanSchemas from "./jenisKerusakan.swagger";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API documentation for Car Repair Workshop",
    },
    components: {
      schemas: {
        ...userSchemas,
        ...roleSchemas,
        ...responseSchemas,
        ...authSchemas,
        ...JenisKerusakanSchemas,
      },
    },
  },
  apis: ["./src/controllers/*.ts"], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
