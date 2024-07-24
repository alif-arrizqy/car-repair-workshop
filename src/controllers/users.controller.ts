import type { Request, Response } from "express";

class UsersController {
  // create a new user
  createUser = async (req: Request, res: Response) => {}

  // get all users
  getAllUsers = async (req: Request, res: Response) => {};

  // get user by id
  getUserById = async (req: Request, res: Response) => {};

  // update user by id
  updateUser = async (req: Request, res: Response) => {};

  // delete user by id
  deleteUser = async (req: Request, res: Response) => {};
}

export default UsersController;
