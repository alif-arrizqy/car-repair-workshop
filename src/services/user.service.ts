import * as UserInterface from "../interfaces/user.interface";
import * as UserDal from "../dal/users.dal";

const createUserService = async (
  payload: UserInterface.ICreateUser
): Promise<UserInterface.IUserOutput> => {
  return await UserDal.createUser(payload);
};

const getAllUsersService = async (): Promise<any[]> => {
  return await UserDal.getAllUsers();
};

const getUserByIdService = async (
  id: string
): Promise<UserInterface.IUserOutput> => {
  return await UserDal.getUserById(id);
};

const updateUserService = async (
  id: string,
  payload: UserInterface.IUpdateUser
): Promise<UserInterface.IUserOutput> => {
  return await UserDal.updateUser(id, payload);
};

const deleteUserService = async (id: string): Promise<UserInterface.IUserOutput> => {
  return await UserDal.deleteUser(id);
}

export {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
};
