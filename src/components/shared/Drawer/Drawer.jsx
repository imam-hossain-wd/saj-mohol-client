'use client';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";


export const Drawer = ({
  icon,
  side,
  children,
  className,
}) => {
  return (
    <Sheet>
      <SheetTrigger className={cn("p-2", className)}>
        {icon}
      </SheetTrigger>
      <SheetContent side={side} className="w-[90vw] sm:w-[400px]">
        {children}
      </SheetContent>
    </Sheet>
  );
};
