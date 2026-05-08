import { api } from "../client";
import { GetUserProfileReponse } from "./user.type";

const uploadCover = (input: FormData) =>
  api.patch<string>("/users/me/cover", input);

const getUserProfile = (targetUser: string) =>
  api.get<GetUserProfileReponse>(`/users/${targetUser}/profile`);

export const userService = { uploadCover , getUserProfile };
