import { Button } from "@/components/ui/button";
import { RelationshipStatus } from "@/lib/api/user/user.type";
import { Check, Plus, Trash2 } from "lucide-react";
import ActionButton from "../friend/action-button";
import { ActionButtonProps } from "../friend/frined.type";
import {
  acceptRequest,
  cancelRequest,
  rejectRequest,
  sendRequest,
  unfriend,
} from "@/lib/actions/friend.action";

type ProfileActionProps = {
  relationshipStatus: RelationshipStatus;
  targetUserId: string;
};

const FRIEND_ACTION_MAP: Record<
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

export default function ProfileAction({
  relationshipStatus,
  targetUserId,
}: ProfileActionProps) {
  if (relationshipStatus === "SELF") return null;

  const { confirm, cancel } = FRIEND_ACTION_MAP[relationshipStatus];
  return (
    <div className="flex items-center gap-2 pb-2">
      {confirm && (
        <ActionButton
          variant={confirm.variant}
          onClickAction={confirm.onClickAction}
          targetUserId={targetUserId}
        >
          {confirm.children}
        </ActionButton>
      )}
      {cancel && (
        <ActionButton
          variant={cancel.variant}
          onClickAction={cancel.onClickAction}
          targetUserId={targetUserId}
        >
          {cancel.children}
        </ActionButton>
      )}
    </div>
  );
}
