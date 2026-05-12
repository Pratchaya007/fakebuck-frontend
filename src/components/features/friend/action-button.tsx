import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { ActionButtonProps } from "./frined.type";

export default function ActionButton({
  children,
  variant = "default",
}: ActionButtonProps) {
  return (
    <Button className="font-semibold" variant={variant}>
      {/* <Check className="size-4" /> */}
      {children}
    </Button>
  );
}
