import ProfileHeader from "@/components/features/profile/profile-header";
import { userService } from "@/lib/api/user/user.service";
import { auth } from "@/lib/auth/auth";
import { getCurrentUser } from "@/lib/auth/session";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function ProfilePage(
  props: PageProps<"/profile/[[...targetUserid]]">,
) {
  const params = await props.params;
  const currentUser = await getCurrentUser();

  // console.log(session);
  const targetUserId = params.targetUserid
    ? params.targetUserid[0]
    : currentUser.id;
  
  const targetUser = await userService.getUserProfile(targetUserId);

  return (
    <div>
      <ProfileHeader {...targetUser} />
    </div>
  );
}
