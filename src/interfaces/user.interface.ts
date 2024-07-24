interface IUser {
  name: string;
  email: string;
  password: string;
  role_id: number;
}

interface IUserOutput {
  status: boolean;
  message: string;
}

export type { IUser, IUserOutput };
