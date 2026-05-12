import { RelationshipStatus, UserWithFriends } from "@/lib/api/user/user.type";
import ProfileCover from "./profile-cover";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera, Check, Trash2 } from "lucide-react";

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
        converUrl={user.coverUrl}
        canEdit={relationshipStatus === "SELF"}
      />
      {/* Info bar */}
      {/* Avatar photo */}
      {/* Friend info */}
      {/* Relationship action */}
      {/* end info bar */}
      {/* Info bar */}
      <div className="max-w-260 mx-auto my-7 px-4">
        <div className="flex items-end justify-between pb-3">
          {/* Left: Avatar + Name */}
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <Avatar className="size-42 border">
                <AvatarImage src={"/default-user.png"} alt="John Doe" />
              </Avatar>
              <Button
                variant="outline"
                className="absolute bottom-3 right-2 size-9 rounded-full shadow"
              >
                <Camera className="w-4 h-4" />
              </Button>
            </div>

            {/* Name + friends */}
            <div className="">
              <h1 className="text-3xl font-bold">John Doe</h1>
              <p className="text-muted-foreground text-sm font-semibold py-1">
                500 friends
              </p>
              <AvatarGroup>
                <Avatar className="z-2">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="z-1">
                  <AvatarImage
                    src="https://github.com/maxleiter.png"
                    alt="@maxleiter"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar className="z-0">
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </div>
          </div>

          {/* Right: Action buttons */}
          <div className="flex items-center gap-2 pb-2">
            <Button className="font-semibold">
              <Check className="size-4" />
              Confirm
            </Button>
            <Button variant="outline" className="font-semibold">
              <Trash2 className="size-4" />
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
