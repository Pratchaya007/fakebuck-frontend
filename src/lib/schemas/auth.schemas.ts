import z from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(1, "กรุณากรอกชื่อ"),
  lastName: z.string().min(1, "กรุณากรอกนามสกุล"),
  dob: z.date("กรุณาเลือกวันเกิด"),
  gender: z.enum(["FEMALE", "MALE", "OTHER"], {
    message: '"กรุณาเลือกเพศ"',
  }),
  email: z.email("รูปแบบอีเมลไม่ถูกต้อง"),

  password: z
    .string({ message: "กรุณากรอกรหัสผ่าน" })
    .regex(/^[0-9a-zA-Z_]{6,}$/, {
      message:
        "รหัสผ่านต้องมีอย่างน้อย 6 ตัว และใช้ได้เฉพาะ a-z, A-Z, 0-9 และ _",
    }),
});

export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().min(1, 'กรุณากรอกอีเมลของท่าน'),
  password: z.string().min(1, 'กรุณากรอกรหัสผ่าน'),
});

export type LoginInput = z.infer<typeof loginSchema>;
