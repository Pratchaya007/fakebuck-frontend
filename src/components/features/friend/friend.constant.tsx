import { RelationshipStatus } from "@/lib/api/user/user.type";
import { Check, Plus, Trash2 } from "lucide-react";
import { ActionButtonProps } from "./frined.type";
import {
  acceptRequest,
  cancelRequest,
  rejectRequest,
  sendRequest,
  unfriend,
} from "@/lib/actions/friend.action";

export const FRIEND_ACTION_MAP: Record<
  Exclude<RelationshipStatus, "SELF">,
  Partial<Record<"confirm" | "cancel", Omit<ActionButtonProps, "targetUserId">>>
> = {
  FRIEND: {
    cancel: {
      children: (
        <>
          <Trash2 /> Unfriend
        </>
      ),
      variant: "destructive",
      onClickAction: unfriend,
    },
  },
  NONE: {
    confirm: {
      children: (
        <>
          <Plus /> Add friend
        </>
      ),
      onClickAction: sendRequest,
    },
  },
  REQUEST_RECEIVED: {
    confirm: {
      children: (
        <>
          <Check /> Confirm
        </>
      ),
      onClickAction: acceptRequest,
    },
    cancel: {
      children: (
        <>
          <Trash2 /> Delete
        </>
      ),
      variant: "outline",
      onClickAction: rejectRequest,
    },
  },
  REQUEST_SENT: {
    cancel: {
      children: (
        <>
          <Trash2 /> Cancel request
        </>
      ),
      variant: "outline",
      onClickAction: cancelRequest,
    },
  },
};
