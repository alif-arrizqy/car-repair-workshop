import * as PasswordDal from "../dal/password.dal";
import type { IResponse } from "../interfaces/common.interface";

const changePasswordService = async (payload: any): Promise<IResponse> => {
  return await PasswordDal.changePassword(payload);
};

const getStoredHashPasswordService = async (id: string): Promise<string> => {
  return await PasswordDal.getStoredHashPassword(id);
}

export { changePasswordService, getStoredHashPasswordService };
