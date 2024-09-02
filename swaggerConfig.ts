import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API",
      version: "1.0.0",
      description: "API documentation for the User service",
    },
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "John Doe",
            },
            email: {
              type: "string",
              example: "john.doe@email.com",
            },
            password: {
              type: "string",
              example: "password",
            },
            role_id: {
              type: "number",
              example: 1,
            },
          },
        },
        UpdateUser: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "John Doe",
            },
            email: {
              type: "string",
              example: "john.doe@email.com",
            },
            role_id: {
              type: "number",
              example: 1,
            },
          },
        },
        ErrorData: {
          type: "object",
          properties: {
            message: {
              type: "object",
              properties: {
                statusCode: {
                  type: "number",
                  example: 400,
                },
                status: {
                  type: "string",
                  example: "failed",
                },
                data: {
                  type: "object",
                  example: {
                    message: "Error message",
                  },
                },
              },
            },
          },
        },
        ErrorMessage: {
          type: "object",
          properties: {
            message: {
              type: "object",
              properties: {
                statusCode: {
                  type: "number",
                  example: 400,
                },
                status: {
                  type: "string",
                  example: "failed",
                },
                message: {
                  type: "string",
                  example: "Error message",
                },
              },
            },
          },
        },
        SuccessDataArray: {
          type: "object",
          properties: {
            message: {
              type: "object",
              properties: {
                statusCode: {
                  type: "number",
                  example: 200,
                },
                status: {
                  type: "string",
                  example: "success",
                },
                data: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "John Doe",
                      },
                      email: {
                        type: "string",
                        example: "john.doe@email.com",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        SuccessDataObject: {
          type: "object",
          properties: {
            message: {
              type: "object",
              properties: {
                statusCode: {
                  type: "number",
                  example: 200,
                },
                status: {
                  type: "string",
                  example: "success",
                },
                data: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                      example: "John Doe",
                    },
                    email: {
                      type: "string",
                      example: "john.doe@email.com",
                    },
                  },
                },
              },
            },
          },
        },
        SuccessMessage: {
          type: "object",
          properties: {
            message: {
              type: "object",
              properties: {
                statusCode: {
                  type: "number",
                  example: 200,
                },
                status: {
                  type: "string",
                  example: "success",
                },
                message: {
                  type: "string",
                  example: "Success message",
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ["./src/controllers/*.ts"], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
