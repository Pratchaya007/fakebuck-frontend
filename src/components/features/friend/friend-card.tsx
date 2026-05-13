import { RelationshipStatus, User } from "@/lib/api/user/user.type";
import Image from "next/image";
import { FRIEND_ACTION_MAP } from "./friend.constant";
import ActionButton from "./action-button";

type FriendCardProps = User & {
  relationshipStatus: Exclude<RelationshipStatus, "SELF">;
};

export default function FriendCard({
  id,
  firstName,
  lastName,
  avatarUrl,
  relationshipStatus,
}: FriendCardProps) {
  const { confirm, cancel } = FRIEND_ACTION_MAP[relationshipStatus];

  return (
    <div className="bg-background rounded-lg border shadow w-full max-w-60 overflow-hidden">
      {/* Profile Image */}
      <div className=" relative aspect-square w-full">
        <Image
          src={avatarUrl ?? "/user.png"}
          alt="user"
          fill
          className=" object-cover"
        />
      </div>

      {/* Info + Action */}
      <div className="p-3">
        <p className="font-semibold text-sm truncate">
          {firstName} {lastName}
        </p>
        <div className="pt-3 flex flex-col gap-1.5">
          {/* <Button>Add Friend</Button> */}
          {/* <Button variant={'outline'}>Delete</Button> */}
          {confirm && (
            <ActionButton
              variant={confirm.variant}
              onClickAction={confirm.onClickAction}
              targetUserId={id}
            >
              {confirm.children}
            </ActionButton>
          )}
          {cancel && (
            <ActionButton
              variant={cancel.variant}
              onClickAction={cancel.onClickAction}
              targetUserId={id}
            >
              {cancel.children}
            </ActionButton>
          )}
        </div>
      </div>
    </div>
  );
}
