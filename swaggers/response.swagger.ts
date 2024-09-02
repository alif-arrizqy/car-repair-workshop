const responseSchemas = {
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
  SuccessCreate: {
    type: "object",
    properties: {
      message: {
        type: "object",
        properties: {
          statusCode: {
            type: "number",
            example: 201,
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
};

export default responseSchemas;
