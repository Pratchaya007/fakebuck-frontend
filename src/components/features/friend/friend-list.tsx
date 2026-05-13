import { RelationshipStatus, User } from "@/lib/api/user/user.type";
import FriendCard from "./friend-card";

type FriendListProps = {
  users: User[];
  relationshipStatus: Exclude<RelationshipStatus, "SELF">;
};

export default function FriendList({
  users,
  relationshipStatus,
}: FriendListProps) {
  return (
    <div className="flex flex-wrap w-full gap-5">
      {users.map((item) => (
        <FriendCard
          key={item.id}
          {...item}
          relationshipStatus={relationshipStatus}
        />
      ))}
    </div>
  );
}
