import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { User } from "@/lib/api/user/user.type";
import Link from "next/link";

type FriendInfoProps = {
  friends: User[];
};

export default function FriendInfo({ friends }: FriendInfoProps) {
  if (friends.length === 0) return null;

  return (
    <>
      <p className="text-muted-foreground text-sm font-semibold py-1">
        {friends.length} friends
      </p>

      <AvatarGroup>
        {friends.map((user, index) => (
          <Link key={user.id} href={`/profile/${user.id}`}>
            <Avatar  style={{ zIndex: friends.length - index }}>
              <AvatarImage src={user.avatarUrl ?? "/user.png"} alt="user" />
              <AvatarFallback>
                {user.firstName.at(0)} {user.lastName.at(0)}
              </AvatarFallback>
            </Avatar>
          </Link>
        ))}
      </AvatarGroup>
    </>
  );
}
