import { RegisterInput } from "@/lib/schemas/auth.schemas";
import { api } from "../client";

const register = (input: RegisterInput) => api.post<void>("/auth/register", input);

export const authService = { register };
