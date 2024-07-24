interface IUser {
  name: string;
  email: string;
  password: string;
  role_id: number;
}

interface IUserOutput {
  status: boolean;
  message: string;
  data?: any;
}

export type { IUser, IUserOutput };
