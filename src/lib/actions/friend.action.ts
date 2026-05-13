'use server'

import { revalidatePath } from "next/cache"
import { friendService } from "../api/friend/friend.service"
import { ActionResult } from "./action.type"

export const sendRequest = async (targetUserId : string) : Promise<ActionResult> => {
  try {
    await friendService.sendRequest(targetUserId)
    revalidatePath(`/profile/${targetUserId}`);
    return { success : true }
  }catch {
    return { success: false}
  }
}
export const cancelRequest = async (targetUserId : string) : Promise<ActionResult> => {
  try {
    await friendService.cancelRequest(targetUserId)
    revalidatePath(`/profile/${targetUserId}`);
    return { success : true }
  }catch {
    return { success: false}
  }
}
export const acceptRequest = async (targetUserId : string) : Promise<ActionResult> => {
  try {
    await friendService.acceptRequest(targetUserId)
    revalidatePath(`/profile/${targetUserId}`);
    return { success : true }
  }catch {
    return { success: false}
  }
}
export const rejectRequest = async (targetUserId : string) : Promise<ActionResult> => {
  try {
    await friendService.rejectRequest(targetUserId)
    revalidatePath(`/profile/${targetUserId}`);
    return { success : true }
  }catch {
    return { success: false}
  }
}
export const unfriend = async (targetUserId : string) : Promise<ActionResult> => {
  try {
    await friendService.unfriend(targetUserId)
    revalidatePath(`/profile/${targetUserId}`);
    return { success : true }
  }catch {
    return { success: false}
  }
}