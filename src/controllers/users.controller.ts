import type { Request, Response } from "express";
import {
  createUserSchema,
  updateUserSchema,
} from "../helpers/validation/user.validation";
import { ResponseHelper } from "../helpers/response/response.helper";
import * as userService from "../services/user.service";

class UsersController {
  /**
   * @swagger
   * /api/users:
   *   post:
   *     summary: Create a new user
   *     tags: [Users]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateUser'
   *     responses:
   *       201:
   *         description: User created successfully
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
  static createUser = async (req: Request, res: Response) => {
    const parsed = createUserSchema.safeParse(req.body);
    if (parsed.success) {
      const user = await userService.createUserService(parsed.data);
      if (user.status) {
        console.log(`Create user success: ${user.message}`);
        res.json(ResponseHelper.successMessage(user.message, 201));
      } else {
        console.log(`Create user failed: ${user.message}`);
        res.json(ResponseHelper.errorMessage(user.message, 400));
      }
    } else {
      console.log(
        `Create user failed, User data is invalid: ${parsed.error.errors}`
      );
      res.json(ResponseHelper.errorData(parsed.error.errors, 400));
    }
  };

  /**
   * @swagger
   * /api/users:
   *   get:
   *     summary: Get all users
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: Get all users successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/SuccessDataArray'
   *       400:
   *         description: Get all users failed
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorMessage'
   */
  static getAllUsers = async (req: Request, res: Response) => {
    const users = await userService.getAllUsersService();
    if (users.length > 0) {
      res.json(ResponseHelper.successData(users, 200));
    } else {
      res.json(ResponseHelper.errorMessage("Get all users failed", 400));
    }
  };

  /**
   * @swagger
   * /api/users/{id}:
   *   get:
   *     summary: Get user by id
   *     tags: [Users]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: User ID
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: User found
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
   *         description: User not found
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorMessage'
   */
  static getUserById = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const user = await userService.getUserByIdService(id);
    if (user.status) {
      res.json(ResponseHelper.successData(user.data, 200));
    } else {
      res.json(ResponseHelper.errorMessage(user.message, 400));
    }
  };

  /**
   * @swagger
   * /api/users/{id}:
   *   put:
   *     summary: Update user by id
   *     tags: [Users]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: User ID
   *         schema:
   *           type: string
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/UpdateUser'
   *     responses:
   *       200:
   *         description: User updated successfully
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
  static updateUser = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const parsed = updateUserSchema.safeParse(req.body);
    if (parsed.success) {
      const user = await userService.updateUserService(id, parsed.data);
      if (user.status) {
        console.log(`Update user success: ${user.message}`);
        res.json(ResponseHelper.successMessage(user.message, 200));
      } else {
        console.log(`Update user failed: ${user.message}`);
        res.json(ResponseHelper.errorMessage(user.message, 400));
      }
    } else {
      console.log(
        `Update user failed, User data is invalid: ${parsed.error.errors}`
      );
      res.json(ResponseHelper.errorData(parsed.error.errors, 400));
    }
  };

  /**
   * @swagger
   * /api/users/{id}:
   *   delete:
   *     summary: Delete user by id
   *     tags: [Users]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: User ID
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: User deleted successfully
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
  static deleteUser = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const user = await userService.deleteUserService(id);
    if (user.status) {
      console.log(`Delete user success: ${user.message}`);
      res.json(ResponseHelper.successMessage(user.message, 200));
    } else {
      console.log(`Delete user failed: ${user.message}`);
      res.json(ResponseHelper.errorMessage(user.message, 400));
    }
  };
}

export default UsersController;
