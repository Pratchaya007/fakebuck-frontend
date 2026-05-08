import { signOut } from "@/lib/auth/auth"

export const GET = async () => {
  await signOut();
}