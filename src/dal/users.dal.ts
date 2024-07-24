import { prisma } from "../app";
import * as UserInterface from "../interfaces/user.interface";

// create a new user
const createUser = async (
  payload: UserInterface.IUser
): Promise<UserInterface.IUserOutput> => {
  try {
    const { name, email, password, role_id } = payload;

    // check if user already exists
    const isExist = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!isExist) {
      // encrypt password
      const hashPassword = await Bun.password.hash(password, {
        algorithm: "argon2id",
        memoryCost: 4,
        timeCost: 3,
      });

      // create user
      await prisma.user.create({
        data: {
          name,
          email,
          password: hashPassword,
          role_id,
        },
      });
      return { status: true, message: "User created successfully" };
    } else {
      return { status: false, message: "User already exists" };
    }
  } catch (error) {
    console.log(`Create user failed: ${error}`);
    return { status: false, message: "Create user failed" };
  }
};

export { createUser };
