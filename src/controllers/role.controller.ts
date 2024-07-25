import type { Request, Response } from "express";
import * as RoleService from "../services/role.service";
import { ResponseHelper } from "../helpers/response/response.helper";

class RoleController {
  static async createRole(req: Request, res: Response) {
    const { name } = req.body;
    const role = await RoleService.createRoleService(name);
    if (role.status) {
      console.log(`Create role success: ${role.message}`);
      res.json(ResponseHelper.successMessage(role.message, 201));
    } else {
      console.log(`Create role failed: ${role.message}`);
      res.json(ResponseHelper.errorMessage(role.message, 400));
    }
  }

  static async getAllRoles(req: Request, res: Response) {
    const roles = await RoleService.getAllRolesService();
    if (roles.length > 0) {
      res.json(ResponseHelper.successData(roles, 200));
    } else {
      res.json(ResponseHelper.errorMessage("Get all roles failed", 400));
    }
  }

  static async getRoleById(req: Request, res: Response) {
    const id:number = parseInt(req.params.id);

    const role = await RoleService.getRoleByIdService(id);
    if (role.status) {
      res.json(ResponseHelper.successData(role.data, 200));
    } else {
      res.json(ResponseHelper.errorMessage(role.message, 400));
    }
  }

  static async updateRole(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    
    const role = await RoleService.updateRoleService(id, name);
    if (role.status) {
      console.log(`Update role success: ${role.message}`);
      res.json(ResponseHelper.successMessage(role.message, 200));
    } else {
      console.log(`Update role failed: ${role.message}`);
      res.json(ResponseHelper.errorMessage(role.message, 400));
    }
  }

  static async deleteRole(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    
    const response = await RoleService.deleteRoleService(id);
    if (response.status) {
      console.log(`Delete role success: ${response.message}`);
      res.json(ResponseHelper.successMessage(response.message, 200));
    } else {
      console.log(`Delete role failed: ${response.message}`);
      res.json(ResponseHelper.errorMessage(response.message, 400));
    }
  }
}

export default RoleController;