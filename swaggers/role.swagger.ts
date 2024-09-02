const roleSchemas = {
  CreateRole: {
    type: "object",
    properties: {
      name: {
        type: "string",
        example: "admin",
      },
    },
  },
  UpdateRole: {
    type: "object",
    properties: {
      name: {
        type: "string",
        example: "admin",
      },
    },
  },
};

export default roleSchemas;
