import { RegisterInput } from "@/lib/schemas/auth.schemas";
import { api } from "../client";
import { User } from "../user/user.type";

const register = (input: RegisterInput) =>
  api.post<void>("/auth/register", input);

const login = (input: unknown) =>
  api.post<{ accessToken: string; user: User }>("/auth/login", input);

export const authService = { register, login };
