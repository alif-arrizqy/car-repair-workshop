import * as RoleDal from "../dal/role.dal";
import type { IResponse } from "../interfaces/common.interface";

const createRoleService = async (name: string): Promise<IResponse> => {
  return await RoleDal.createRole(name);
};

const getAllRolesService = async (): Promise<any[]> => {
  return await RoleDal.getAllRoles();
};

const getRoleByIdService = async (id: number): Promise<IResponse> => {
  return await RoleDal.getRoleById(id);
};

const updateRoleService = async (id: number, name: string): Promise<IResponse> => {
  return await RoleDal.updateRole(id, name);
};

const deleteRoleService = async (id: number): Promise<IResponse> => {
  return await RoleDal.deleteRole(id);
}

export {
  createRoleService,
  getAllRolesService,
  getRoleByIdService,
  updateRoleService,
  deleteRoleService,
};