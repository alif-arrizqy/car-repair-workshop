import { z } from "zod";

const changePasswordSchema = z.object({
  id: z.string(),
  oldPassword: z.string().min(6),
  newPassword: z.string().min(6),
});

export { changePasswordSchema };
