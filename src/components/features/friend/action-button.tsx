"use client";

import { Button } from "@/components/ui/button";
import { Check, Loader } from "lucide-react";
import { ActionButtonProps } from "./frined.type";
import { useTransition } from "react";

export default function ActionButton({
  children,
  variant = "default",
  targetUserId,
  onClickAction,
}: ActionButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      onClickAction(targetUserId);
    });
  };

  return (
    <Button
      className="font-semibold"
      variant={variant}
      onClick={handleClick}
      disabled={isPending}
    >
      {/* <Check className="size-4" /> */}
      {isPending ? <Loader className=" animate-spin"/> : children}
    </Button>
  );
}
