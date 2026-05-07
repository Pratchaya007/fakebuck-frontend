import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { auth } from "@/lib/auth/auth";
import { logout } from "@/lib/actions/auth.action";

export default async function UserDropdown() {
  const session = await auth();
  // console.log(session);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        <Avatar className="size-10">
          <AvatarImage alt="user" src={session?.user?.avatarUrl ?? '/user.png'} />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60 p-2">
        <DropdownMenuItem
          asChild
          className="hover:bg-muted-foreground cursor-pointer"
        >
          <Link href={"/profile"}>
            <Avatar className="size-9">
              <AvatarImage alt="user" src={session?.user?.avatarUrl ?? '/user.png'} />
            </Avatar>
            <div>
              <h2 className="text-sm font-semibold">
                {session?.user?.firstName} {session?.user?.lastName}
              </h2>
              <p className="text-xs text-muted-foreground">See your profile</p>
            </div>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator className=" my-2 mx-0" />
        <DropdownMenuItem
          asChild
          className="hover:bg-muted-foreground cursor-pointer"
        >
          <button className="flex items-center w-full gap-3" onClick={logout}>
            <div className="bg-muted size-9 flex items-center justify-center rounded-full">
              <LogOut />
            </div>
            <span className="font-semibold"> Logout</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
