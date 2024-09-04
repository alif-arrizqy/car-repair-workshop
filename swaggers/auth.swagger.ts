const AuthScehams = {
  RequestResetPassword: {
    type: "object",
    properties: {
      email: {
        type: "string",
        format: "email",
        example: "john.doe@email.com",
      },
    },
  },
  ResetPassword: {
    type: "object",
    properties: {
      token: {
        type: "string",
        example: "secret-token",
      },
      newPassword: {
        type: "string",
        example: "password",
      },
    },
  },
  ChangePassword: {
    type: "object",
    properties: {
      id: {
        type: "string",
        example: "user-id",
      },
      oldPassword: {
        type: "string",
        example: "old-password",
      },
      newPassword: {
        type: "string",
        example: "new-password",
      },
    },
  },
};

export default AuthScehams;
