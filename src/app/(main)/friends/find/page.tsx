import FriendList from "@/components/features/friend/friend-list";
import { userService } from "@/lib/api/user/user.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Friend",
};

export default async function FindPage() {
  const noneRelationUsers = await userService.getUserWithNoneRelation();
  return (
    <div className="p-8">
      <div className="mb-4">
        <h2 className="font-bold text-xl">People you may know</h2>
      </div>
      {/* Friend list */}
      <FriendList users={noneRelationUsers} relationshipStatus="NONE"/>
    </div>
  );
}
