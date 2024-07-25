import { prisma } from "../app";
import type { IResponse } from "../interfaces/common.interface";

// change password
const changePassword = async (payload: any): Promise<IResponse> => {
  try {
    const { id, newPassword } = payload;

    // encrypt new password
    const hashNewPassword = await Bun.password.hash(newPassword, {
      algorithm: "argon2id",
      memoryCost: 4,
      timeCost: 3,
    });

    // update user password
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        password: hashNewPassword,
      },
    });

    return { status: true, message: "Change password success" };
  } catch (error) {
    console.log(`Change password failed: ${error}`);
    return { status: false, message: "Change password failed" };
  }
};

const getStoredHashPassword = async (id: string): Promise<string> => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
      select: { password: true}
    });
    return user?.password ?? "";
  } catch (error) {
    console.log(`Get stored hash password failed: ${error}`);
    return "";
  }
}

export { changePassword, getStoredHashPassword };
