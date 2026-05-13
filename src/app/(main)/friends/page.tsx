import FriendList from "@/components/features/friend/friend-list";
import { friendService } from "@/lib/api/friend/friend.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Friend",
};

export default async function FriendPage() {
  const friends = await friendService.getFriends()
  return (
    <div className="p-8">
      <div className="mb-4">
        <h2 className="font-bold text-xl">Friends</h2>
      </div>
      {/* Friend list */}
      <FriendList users={friends} relationshipStatus="FRIEND" />
    </div>
  );
}
