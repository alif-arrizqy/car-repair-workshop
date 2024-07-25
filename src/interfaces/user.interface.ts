export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  role_id: number;
}

export interface IUpdateUser {
  name?: string;
  email?: string;
  role_id?: number;
}
