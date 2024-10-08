import { prisma } from "../app";
import * as UserInterface from "../interfaces/user.interface";
import type { IResponse } from "../interfaces/common.interface";
import { v7 as uuidv7 } from "uuid";

// create a new user
const createUser = async (
  payload: UserInterface.ICreateUser
): Promise<IResponse> => {
  try {
    const { name, email, password, role_id } = payload;

    // check if email already exists
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

      // generate uuid
      const id = uuidv7();

      // create user
      await prisma.user.create({
        data: {
          id,
          name,
          email,
          password: hashPassword,
          role_id,
        },
      });
      return { status: true, message: "User created successfully" };
    } else {
      return { status: false, message: "Email has been registered" };
    }
  } catch (error) {
    console.log(`Create user failed: ${error}`);
    return { status: false, message: "Create user failed" };
  }
};

const getAllUsers = async (): Promise<any[]> => {
  try {
    const users = await prisma.user.findMany({
      include: {
        role: {
          select: {
            name: true,
          },
        },
      },
    });

    // destructuring user object
    const response = users.map((user) => {
      const { password, created_at, updated_at, role_id, ...rest } = user;
      return { ...rest, role: user.role.name };
    });

    return response;
  } catch (error) {
    console.log(`Get all users failed: ${error}`);
    return [];
  }
};

const getUserById = async (id: string): Promise<IResponse> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        role: {
          select: {
            name: true,
          },
        },
      },
    });

    if (user) {
      const { password, created_at, updated_at, role_id, ...rest } = user;
      return {
        status: true,
        message: "User is found",
        data: { ...rest, role: user.role.name },
      };
    } else {
      return { status: false, message: "User not found" };
    }
  } catch (error) {
    console.log(`Get user by id failed: ${error}`);
    return { status: false, message: "Get user by id failed" };
  }
};

const getUserByEmail = async (email: string): Promise<IResponse> => {
  try {
    const isExist = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (isExist) {
      return { status: true, message: "Email is found", data: isExist };
    } else {
      return { status: false, message: "Email is not found" };
    }
  } catch (error) {
    console.log(`Get user by email failed: ${error}`);
    return { status: false, message: "Failed to find Users" };
  }
};

const updateUser = async (
  id: string,
  payload: UserInterface.IUpdateUser
): Promise<IResponse> => {
  try {
    const { name, email, role_id } = payload;

    // check if user exists
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    // check if email exist
    const emailExist = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (user) {
      if (emailExist && emailExist.id !== id) {
        return { code: 400, message: "Email has been registered" };
      }
      // update user
      await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          name,
          email,
          role_id,
        },
      });
      return { code: 200, message: "User updated successfully" };
    } else {
      return { code: 404, message: "User not found" };
    }
  } catch (error) {
    console.log(`Update user failed: ${error}`);
    return { code: 400, message: "Update user failed" };
  }
};

const deleteUser = async (id: string): Promise<IResponse> => {
  try {
    // check if user exists
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (user) {
      // delete user
      await prisma.user.delete({
        where: {
          id: id,
        },
      });
      return { code: 200, message: "User deleted successfully" };
    } else {
      return { code: 404, message: "User not found" };
    }
  } catch (error) {
    console.log(`Delete user failed: ${error}`);
    return { code: 400, message: "Delete user failed" };
  }
}

export {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUser,
  deleteUser,
};
