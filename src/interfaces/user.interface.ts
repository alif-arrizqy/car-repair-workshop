interface ICreateUser {
  name: string;
  email: string;
  password: string;
  role_id: number;
}

interface IUpdateUser {
  name?: string;
  email?: string;
  role_id?: number;
}

interface IUserOutput {
  status: boolean;
  message: string;
  data?: any;
}

export type { ICreateUser, IUpdateUser, IUserOutput };
