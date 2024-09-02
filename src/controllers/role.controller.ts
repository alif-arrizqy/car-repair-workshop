import type { Request, Response } from "express";
import * as RoleService from "../services/role.service";
import { ResponseHelper } from "../helpers/response/response.helper";

class RoleController {
  /**
   * @swagger
   * /api/role:
   *   post:
   *     summary: Create a new role
   *     tags: [Roles]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateRole'
   *     responses:
   *       201:
   *         description: Role created successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/SuccessMessage'
   *       400:
   *         description: Bad Request
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorMessage'
   */
  static async createRole(req: Request, res: Response) {
    const { name } = req.body;
    const role = await RoleService.createRoleService(name);
    if (role.status) {
      console.log(`Create role success: ${role.message}`);
      res.status(201).json(ResponseHelper.successMessage(role.message, 201));
    } else {
      console.log(`Create role failed: ${role.message}`);
      res.status(400).json(ResponseHelper.errorMessage(role.message, 400));
    }
  }

  /**
   * @swagger
   * /api/role:
   *   get:
   *     summary: Get all roles
   *     tags: [Roles]
   *     responses:
   *       200:
   *         description: Get all roles successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/SuccessDataArray'
   *       400:
   *         description: Get all roles failed
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorMessage'
   */
  static async getAllRoles(req: Request, res: Response) {
    const roles = await RoleService.getAllRolesService();
    if (roles.length > 0) {
      res.json(ResponseHelper.successData(roles, 200));
    } else {
      res.status(400).json(ResponseHelper.errorMessage("Get all roles failed", 400));
    }
  }

  /**
   * @swagger
   * /api/role/{id}:
   *   get:
   *     summary: Get role by id
   *     tags: [Roles]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Role ID
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Role found
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/SuccessDataObject'
   *       400:
   *         description: Invalid ID supplied
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorMessage'
   *       404:
   *         description: Role not found
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorMessage'
   */
  static async getRoleById(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const role = await RoleService.getRoleByIdService(id);
      if (role.status) {
        res.json(ResponseHelper.successData(role.data, 200));
      } else {
        res.status(404).json(ResponseHelper.errorMessage(role.message, 400));
      }
    } catch (error) {
      console.log(`Get role by id failed: ${error}`);
      res.status(400).json(ResponseHelper.errorMessage("Get role by id failed", 400));
    }
  }

  /**
   * @swagger
   * /api/role/{id}:
   *   put:
   *     summary: Update role by id
   *     tags: [Roles]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Role ID
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/UpdateRole'
   *     responses:
   *       200:
   *         description: Role updated successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/SuccessMessage'
   *       400:
   *         description: Bad Request
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorMessage'
   *       404:
   *         description: Not Found
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorMessage'
   */
  static async updateRole(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    try {
      const role = await RoleService.updateRoleService(id, name);
      if (role.code === 200) {
        console.log(`Update role success: ${role.message}`);
        res.json(ResponseHelper.successMessage(role.message, 200));
      } else if (role.code === 400) {
        console.log(`Update role failed: ${role.message}`);
        res.status(400).json(ResponseHelper.errorMessage(role.message, 400));
      } else {
        console.log(`Update role failed: ${role.message}`);
        res.status(404).json(ResponseHelper.errorMessage(role.message, 404));
      }
    } catch (error) {
      console.log(`Update role failed: ${error}`);
      res.status(400).json(ResponseHelper.errorMessage("Update role failed", 400));
    }
  }

  /**
   * @swagger
   * /api/role/{id}:
   *   delete:
   *     summary: Delete role by id
   *     tags: [Roles]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Role ID
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Role deleted successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/SuccessMessage'
   *       400:
   *         description: Bad Request
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorMessage'
   */
  static async deleteRole(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    const response = await RoleService.deleteRoleService(id);
    if (response.status) {
      console.log(`Delete role success: ${response.message}`);
      res.json(ResponseHelper.successMessage(response.message, 200));
    } else {
      console.log(`Delete role failed: ${response.message}`);
      res.status(400).json(ResponseHelper.errorMessage(response.message, 400));
    }
  }
}

export default RoleController;
