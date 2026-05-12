import { Button } from "@/components/ui/button";
import { RelationshipStatus } from "@/lib/api/user/user.type";
import { Check, Plus, Trash2 } from "lucide-react";
import ActionButton from "../friend/action-button";
import { ActionButtonProps } from "../friend/frined.type";

type ProfileActionProps = {
  relationshipStatus: RelationshipStatus;
};

const FRIEND_ACTION_MAP: Record<
  Exclude<RelationshipStatus, "SELF">,
  Partial<Record<"confirm" | "cancel", ActionButtonProps>>
> = {
  FRIEND: {
    cancel: {
      children: (
        <>
          <Trash2 /> Unfriend
        </>
      ),
      variant: "destructive",
    }
  },
  NONE: {
    confirm: {
      children: (
        <>
          <Plus/> Add friend
        </>
      )
    }
  },
  REQUEST_RECEIVED: {
    confirm: {
      children: (
        <>
          <Check/> Confirm
        </>
      )
    },
    cancel: {
      children: (
        <>
          <Trash2 /> Delete
        </>
      ),
      variant: 'outline',
    }
  },
  REQUEST_SENT: {
    cancel: {
      children: (
        <>
          <Trash2 /> Cancel request
        </>
      ),
      variant: 'outline',
    }
  },
};

export default function ProfileAction({
  relationshipStatus,
}: ProfileActionProps) {
  if (relationshipStatus === "SELF") return null;

  const { confirm, cancel } = FRIEND_ACTION_MAP[relationshipStatus];
  return (
    <div className="flex items-center gap-2 pb-2">
      { confirm && <ActionButton variant={confirm.variant}>{confirm.children}</ActionButton>}
      { cancel && <ActionButton variant={cancel.variant}>{cancel.children}</ActionButton>}
    </div>
  );
}
