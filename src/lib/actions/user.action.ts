"use server";

import { userService } from "../api/user/user.service";
import { unstable_update } from "../auth/auth";
import { ActionResult } from "./action.type";
import { formatActionError } from "./action.util";

export const uploadCover = async (file: File): Promise<ActionResult> => {
  const formData = new FormData();
  formData.append("cover", file);

  try {
    await userService.uploadCover(formData);
    // console.log('Upload result' , result)
    return { success: true };
  } catch (error) {
    return formatActionError(error);
  }
};

export const uploadAvatar = async (file: File): Promise<ActionResult> => {
  const formData = new FormData();
  formData.append('avatar',file);

  try{
    const avatarUrl = await userService.uploadAvatar(formData)
    await unstable_update({user: { avatarUrl }})
    return { success : true}
  }catch (error) {
    return formatActionError(error);
  }
};