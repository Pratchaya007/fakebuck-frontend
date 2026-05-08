import { redirect } from "next/navigation";
import { auth } from "./auth";
import z from "zod";

const currentUserSchma = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  accessToken: z.string(),
  avatarUrl: z.string().nullable()
})

export const  getCurrentUser = async () => {
  const session = await auth();
  if (!session) redirect('/login');

  const {success , data , error} = currentUserSchma.safeParse(session.user);
  if (!success) {
    console.log('Session user is invalid: \n', z.prettifyError(error))
    redirect('/login')
  }

  return data;
};