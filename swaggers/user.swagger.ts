const userSchemas = {
  CreateUser: {
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
};

export default userSchemas;
