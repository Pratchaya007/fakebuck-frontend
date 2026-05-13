import { cn } from "@/lib/utils";
import { LucideProps, Users } from "lucide-react";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type FriendNavigetionProps = {
  labal: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
  active?: boolean;
};

export default function FriendNavigetion({
  labal,
  icon: Icon,
  href,
  active = false,
}: FriendNavigetionProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-muted",
        active ? "text-primary" : "hover:bg-muted",
      )}
    >
      <div
        className={cn(
          "bg-muted-foreground/20 size-9 rounded-full flex justify-center items-center",
          active ? "bg-primary/20" : "bg-muted-foreground/30",
        )}
      >
        <Icon className="size-5" />
      </div>
      <span className="text-sm font-medium">{labal}</span>
    </Link>
  );
}
