import z from "zod";

export const signUpSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    fullName: z.string().min(1, "Full name is required"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    agree: z.boolean().refine((val) => val === true, "You must accept terms"),
});

export const signInSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });
  


export type SignInInput = z.infer<typeof signInSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;