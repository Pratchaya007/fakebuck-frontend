"use client";

import { Home, Users } from "lucide-react";
import MainNavigationItem from "./navigation-item";
import { usePathname } from "next/navigation";

const NAVIGATION_ITEMS = [
  { href: "/", icon: <Home /> },
  { href: "/friends", icon: <Users /> },
] as const;

export default function MainNavigation() {
  const pathname = usePathname();

  return (
    <div className="flex gap-3 items-center justify-center">
      {NAVIGATION_ITEMS.map((item) => (
        <MainNavigationItem
          key={item.href}
          href={item.href}
          icon={item.icon}
          isActive={
            item.href === "/"
              ? pathname === item.href
              : pathname.startsWith(item.href)
          }
        />
      ))}
    </div>
  );
}
