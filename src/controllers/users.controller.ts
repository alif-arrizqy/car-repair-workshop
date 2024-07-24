import type { Request, Response } from "express";
import { createUserSchema } from "../helpers/validation/user.validation";
import { ResponseHelper } from "../helpers/response/response.helper";
import { createUserService, getAllUsersService } from "../services/user.service";

class UsersController {
  // create a new user
  createUser = async (req: Request, res: Response) => {
    // create user schema validation
    const parsed = createUserSchema.safeParse(req.body);
    if (parsed.success) {
      // create user service
      const user = await createUserService(parsed.data);
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
  getAllUsers = async (req: Request, res: Response) => {
    const users = await getAllUsersService();
    if (users.length > 0) {
      res.json(ResponseHelper.successData(users, 200));
    } else {
      res.json(ResponseHelper.errorMessage("Get all users failed", 400));
    }
  };

  // get user by id
  getUserById = async (req: Request, res: Response) => {};

  // update user by id
  updateUser = async (req: Request, res: Response) => {};

  // delete user by id
  deleteUser = async (req: Request, res: Response) => {};
}

export default UsersController;
