"use client";

import { UserCheck, UserPlus, Users, UserX } from "lucide-react";
import FriendNavigetion from "./friend-navigation";
import { usePathname } from "next/navigation";

const FRIEND_NAV_ITEMS = [
  {
    icon: Users,
    label: "All Friends",
    href: "/friends",
  },
  {
    icon: UserCheck,
    label: "Friend Request",
    href: "/friends/requests/received",
  },
  {
    icon: UserX,
    label: "Sent Requests",
    href: "/friends/requests/sent",
  },
  {
    icon: UserPlus,
    label: "Find People",
    href: "/friends/find",
  },
];

export default function FriendSidebar() {
  const pathName = usePathname();

  return (
    <aside className="w-80 fixed bg-background top-14 left-0 h-[calc(100vh-3.5rem)] p-3 shadow overflow-y-auto">
      {/* Sidabar header */}
      <h1 className="font-semibold text-xl p-3">Friends</h1>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        {FRIEND_NAV_ITEMS.map((item) => (
          <FriendNavigetion
            key={item.href}
            href={item.href}
            icon={item.icon}
            labal={item.label}
            active={pathName === item.href}
          />
        ))}
      </nav>
    </aside>
  );
}
