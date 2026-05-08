"use server";

import { userService } from "../api/user/user.service";
import { ActionResult } from "./action.type";
import { formatActionError } from "./action.util";

export const uploadCover = async (file: File): Promise<ActionResult> => {
  const formData = new FormData();
  formData.append("cover", file);

  try {
    const result = await userService.uploadCover(formData);
    console.log('Upload result' , result)
    return { success: true };
  } catch (error) {
    return formatActionError(error);
  }
};
