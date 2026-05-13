import { RelationshipStatus, UserWithFriends } from "@/lib/api/user/user.type";
import ProfileCover from "./profile-cover";
import ProfileAvatar from "./profile-avatar";
import ProfileAction from "./profile-action";
import FriendInfo from "./friend-info";

interface ProfileHeaderProps {
  user: UserWithFriends;
  relationshipStatus: RelationshipStatus;
}

export default function ProfileHeader({
  user,
  relationshipStatus,
}: ProfileHeaderProps) {
  return (
    <div className=" shadow bg-background">
      {/* Cover photo */}
      <ProfileCover
        coverUrl={user.coverUrl}
        canEdit={relationshipStatus === "SELF"}
      />
      {/* Info bar */}
      <div className="max-w-260 mx-auto my-7 px-4">
        <div className="flex items-end justify-between pb-3">
          {/* Left: Avatar + Name */}
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <ProfileAvatar
              avatarUrl={user.avatarUrl}
              canEdit={relationshipStatus === "SELF"}
            />

            {/* Name + friends */}
            <div className="">
              <h1 className="text-3xl font-bold">{user.firstName} {user.lastName}</h1>
              <FriendInfo friends={user.friends}/>
            </div>
          </div>

          {/* Right: Action buttons */}
          <ProfileAction relationshipStatus={relationshipStatus} targetUserId={user.id}/>
        </div>
      </div>
    </div>
  );
}
