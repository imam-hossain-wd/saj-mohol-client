'use client';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";


export const ReusableDrawer = ({
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



      {/* <ReusableDrawer
        icon={<Menu className="h-6 w-6 text-pink-500" />}
        side="left"
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold">Navigation</h2>
        </div>
      </ReusableDrawer> */}

      {/* Open drawer from left with cart icon */}
{/* 
      <ReusableDrawer
        icon={<ShoppingCart className="h-6 w-6 text-pink-500" />}
        side="right"
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold">Your Cart</h2>
        </div>
      </ReusableDrawer> */}