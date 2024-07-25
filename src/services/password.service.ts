import type { IOutput } from "../interfaces/user.interface";
import * as PasswordDal from "../dal/password.dal";

const changePasswordService = async (payload: any): Promise<IOutput> => {
  return await PasswordDal.changePassword(payload);
};

const getStoredHashPasswordService = async (id: string): Promise<string> => {
  return await PasswordDal.getStoredHashPassword(id);
}

export { changePasswordService, getStoredHashPasswordService };
