"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

type DatePickerInputProps = {
  id: string;
  isValid: boolean;
  value: Date;
  onValueCnange: (...event: unknown[]) => void;
};

export default function DatePickerInput({id,isValid,value,onValueCnange}: DatePickerInputProps) {
  // const [date, setDate] = useState<Date | undefined>();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant={"outline"} className={cn("justify-start px-3 font-normal", !isValid && 'border-destructive')} id={id}>
          {value ? (
            format(value, "dd MMMM yyyy")
          ) : (
            <span className="text-muted-foreground">Select date of birth</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-1">
        <Calendar
          mode="single"
          captionLayout="dropdown"
          selected={value}
          onSelect={(date) => {
            onValueCnange(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
