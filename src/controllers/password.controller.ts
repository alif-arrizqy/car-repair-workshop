import jwt from "jsonwebtoken";
import type { Request, Response } from "express";
import { ResponseHelper } from "../helpers/response/response.helper";
import * as PasswordService from "../services/password.service";
import { getUserByEmailService } from "../services/user.service";
import { changePasswordSchema } from "../helpers/validation/password.validation";

class PasswordController {
  // generate token
  static generateToken = async (payload: any, expiresIn: string) => {
    const secretKey = process.env.TOKEN_SECRET;
    return jwt.sign(payload, secretKey, { expiresIn });
  };

  // change password
  static changePassword = async (req: Request, res: Response) => {
    const parsed = changePasswordSchema.safeParse(req.body);
    if (parsed.success) {
      const { id, oldPassword, newPassword } = parsed.data;

      // check old password with stored hash
      const storedHash = await PasswordService.getStoredHashPasswordService(id);

      // verify old password with stored hash
      const isMatch = await Bun.password.verifySync(oldPassword, storedHash);

      if (isMatch) {
        const payload = { id, newPassword };

        // update user password
        const updated = await PasswordService.changePasswordService(payload);
        if (updated.status) {
          console.log(`Change password success: ${updated.message}`);
          res.json(ResponseHelper.successMessage(updated.message, 200));
        } else {
          console.log(`Change password failed: ${updated.message}`);
          res.json(ResponseHelper.errorMessage(updated.message, 400));
        }
      } else {
        res.json(
          ResponseHelper.errorMessage("Current password is incorrect", 400)
        );
      }
    } else {
      console.log(
        `Change password failed, Data is invalid: ${parsed.error.errors}`
      );
      res.json(ResponseHelper.errorData(parsed.error.errors, 400));
    }
  };

  // request reset password
  static requestResetPassword = async (req: Request, res: Response) => {
    const { email } = req.body;

    // check if email is registered
    const user = await getUserByEmailService(email);
    if (user.status) {
      const payload = { id: user.data.id };

      // generate token
      const token = await PasswordController.generateToken(
        payload,
        `${process.env.TOKEN_EXPIRES_RESET_PASSWORD}`
      );

      // send email with token
      const response = {
        email: user.data.email,
        token: token,
      };
      res.json(ResponseHelper.successData(response, 200));
    } else {
      res.json(ResponseHelper.errorMessage("Email is not registered", 400));
    }
  };

  // reset password
  static resetPassword = async (req: Request, res: Response) => {
    const { token, newPassword } = req.body;

    // verify token
    jwt.verify(
      token,
      process.env.TOKEN_SECRET,
      async (err: any, decoded: any) => {
        if (err) {
          console.log(`Reset password failed: ${err.message}`);
          res.json(ResponseHelper.errorMessage(err.message, 400));
        } else {
          const payload = { id: decoded.id, newPassword };
          
          // update user password
          const updated = await PasswordService.changePasswordService(payload);
          if (updated.status) {
            console.log(`Reset password success: ${updated.message}`);
            res.json(ResponseHelper.successMessage(updated.message, 200));
          } else {
            console.log(`Reset password failed: ${updated.message}`);
            res.json(ResponseHelper.errorMessage(updated.message, 400));
          }
        }
      }
    );
  };
}

export { PasswordController };
