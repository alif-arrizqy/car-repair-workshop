import { prisma } from "../app";
import type { IResponse } from "../interfaces/common.interface";

const createRole = async (name: string): Promise<IResponse> => {
  try {
    // check if role is exist
    // lowercase the name
    name = name.toLowerCase();
    const isExist = await prisma.role.findFirst({
      where: {
        name,
      },
    });

    if (isExist) {
      return { status: false, message: "Role already exists" };
    }

    await prisma.role.create({
      data: {
        name,
      },
    });
    return { status: true, message: "Role created successfully" };
  } catch (error) {
    console.log(`Create role failed: ${error}`);
    return { status: false, message: "Create role failed" };
  }
};

const getAllRoles = async (): Promise<any[]> => {
  try {
    const roles = await prisma.role.findMany();
    return roles;
  } catch (error) {
    console.log(`Get all roles failed: ${error}`);
    return [];
  }
};

const getRoleById = async (id: number): Promise<IResponse> => {
  try {
    const role = await prisma.role.findUnique({
      where: {
        id: id,
      },
    });

    if (role) {
      const { name } = role;
      return { status: true, message: "Role is found", data: { role: name } };
    } else {
      return { status: false, message: "Role is not found" };
    }
  } catch (error) {
    console.log(`Get role by id failed: ${error}`);
    return { status: false, message: "Get role by id failed" };
  }
};

const updateRole = async (id: number, name: string): Promise<IResponse> => {
  try {
    // check if role is exist
    const role = await prisma.role.findUnique({
      where: {
        id,
      },
    });

    // check role name is exist
    const checkName: string = name.toLowerCase();
    const roleNameExist = await prisma.role.findFirst({
      where: {
        name: checkName,
      },
    });

    if (!role) {
      return { status: false, message: "Role is not found" };
    } else {
      await prisma.role.update({
        where: {
          id,
        },
        data: {
          name,
        },
      });
      return { status: true, message: "Role updated successfully" };
    }
  } catch (error) {
    console.log(`Update role failed: ${error}`);
    return { status: false, message: "Update role failed" };
  }
};

const deleteRole = async (id: number): Promise<IResponse> => {
  try {
    // check if role is exist
    const role = await prisma.role.findUnique({
      where: {
        id,
      },
    });

    if (!role) {
      return { status: false, message: "Role is not found" };
    } else {
      await prisma.role.delete({
        where: {
          id,
        },
      });
      return { status: true, message: "Role deleted successfully" };
    }
  } catch (error) {
    console.log(`Delete role failed: ${error}`);
    return { status: false, message: "Delete role failed" };
  }
};

export { createRole, getAllRoles, getRoleById, updateRole, deleteRole };
