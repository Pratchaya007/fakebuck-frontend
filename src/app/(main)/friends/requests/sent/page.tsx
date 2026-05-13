import FriendList from "@/components/features/friend/friend-list";
import { friendService } from "@/lib/api/friend/friend.service";
import { Metadata } from "next"

export const metadata: Metadata ={
  title: 'Request Sent'
}

export default async function RequstSentPage() {
  const outgoingUser = await friendService.getOutgoingRequest();
    return (
      <div className="p-8">
        <div className="mb-4">
          <h2 className="font-bold text-xl">Send Friends</h2>
        </div>
        {/* Friend list */}
        <FriendList users={outgoingUser} relationshipStatus="REQUEST_SENT" />
      </div>
    );
}