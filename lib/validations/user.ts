import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  firstName: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  lastName: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  username: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  organization: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(110, { message: "Maximum 110 caracters." }),
  industry: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(110, { message: "Maximum 110 caracters." }),
});
