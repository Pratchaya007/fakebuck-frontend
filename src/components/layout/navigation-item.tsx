import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type NavigationItemProps = {
  href: string;
  icon: ReactNode;
  isActive?: boolean;
};

export default function MainNavigationItem({
  href,
  icon,
  isActive = false,
}: NavigationItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        " relative w-28 h-12 flex items-center justify-center rounded-lg",
        isActive? 'text-primary' : 'hover:bg-muted text-muted-foreground'
      )}
    >
      {icon}
      {
        isActive && (
          <span className="absolute -bottom-1 h-0.75 bg-primary w-full"></span>
        )
      }
    </Link>
  );
}
