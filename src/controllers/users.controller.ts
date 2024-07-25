import type { Request, Response } from "express";
import { createUserSchema, updateUserSchema } from "../helpers/validation/user.validation";
import { ResponseHelper } from "../helpers/response/response.helper";
import * as userService from "../services/user.service";

class UsersController {
  // create a new user
  static createUser = async (req: Request, res: Response) => {
    // create user schema validation
    const parsed = createUserSchema.safeParse(req.body);
    if (parsed.success) {
      // create user service
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

  // get all users
  static getAllUsers = async (req: Request, res: Response) => {
    const users = await userService.getAllUsersService();
    if (users.length > 0) {
      res.json(ResponseHelper.successData(users, 200));
    } else {
      res.json(ResponseHelper.errorMessage("Get all users failed", 400));
    }
  };

  // get user by id
  static getUserById = async (req: Request, res: Response) => {
    const id: string = req.params.id;

    // get user by id service
    const user = await userService.getUserByIdService(id);
    if (user.status) {
      res.json(ResponseHelper.successData(user.data, 200));
    } else {
      res.json(ResponseHelper.errorMessage(user.message, 400));
    }
  };

  // update user by id
  static updateUser = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    
    // update user schema validation
    const parsed = updateUserSchema.safeParse(req.body);
    if (parsed.success) {
      // update user service
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

  // delete user by id
  static deleteUser = async (req: Request, res: Response) => {
    const id: string = req.params.id;

    // delete user service
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
