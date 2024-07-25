import * as UserInterface from "../interfaces/user.interface";
import * as UserDal from "../dal/users.dal";
import type { IResponse } from "../interfaces/common.interface";

const createUserService = async (
  payload: UserInterface.ICreateUser
): Promise<IResponse> => {
  return await UserDal.createUser(payload);
};

const getAllUsersService = async (): Promise<any[]> => {
  return await UserDal.getAllUsers();
};

const getUserByIdService = async (
  id: string
): Promise<IResponse> => {
  return await UserDal.getUserById(id);
};

const getUserByEmailService = async (
  email: string
): Promise<IResponse> => {
  return await UserDal.getUserByEmail(email);
}

const updateUserService = async (
  id: string,
  payload: UserInterface.IUpdateUser
): Promise<IResponse> => {
  return await UserDal.updateUser(id, payload);
};

const deleteUserService = async (id: string): Promise<IResponse> => {
  return await UserDal.deleteUser(id);
}

export {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  getUserByEmailService,
  updateUserService,
  deleteUserService,
};
