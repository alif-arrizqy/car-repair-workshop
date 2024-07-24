import * as UserInterface from "../interfaces/user.interface";
import * as UserDal from "../dal/users.dal";

const createUserService = async (
  payload: UserInterface.IUser
): Promise<UserInterface.IUserOutput> => {
  return await UserDal.createUser(payload);
};

const getAllUsersService = async (): Promise<any[]> => {
  return await UserDal.getAllUsers();
}

export { createUserService, getAllUsersService };
