import * as UserInterface from "../interfaces/user.interface";
import * as UserDal from "../dal/users.dal";

const createUserService = async (
  payload: UserInterface.ICreateUser
): Promise<UserInterface.IOutput> => {
  return await UserDal.createUser(payload);
};

const getAllUsersService = async (): Promise<any[]> => {
  return await UserDal.getAllUsers();
};

const getUserByIdService = async (
  id: string
): Promise<UserInterface.IOutput> => {
  return await UserDal.getUserById(id);
};

const getUserByEmailService = async (
  email: string
): Promise<UserInterface.IOutput> => {
  return await UserDal.getUserByEmail(email);
}

const updateUserService = async (
  id: string,
  payload: UserInterface.IUpdateUser
): Promise<UserInterface.IOutput> => {
  return await UserDal.updateUser(id, payload);
};

const deleteUserService = async (id: string): Promise<UserInterface.IOutput> => {
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
