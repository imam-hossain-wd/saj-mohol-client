


// components/ui/custom-toast.tsx


'use client'
import { useEffect } from "react";
import { CheckCircle2, X, Info, AlertCircle } from "lucide-react";
import { cva} from "class-variance-authority";
import { cn } from "@/lib/utils";

const toastVariants = cva(
  "relative w-full flex items-center gap-3 p-4 rounded-lg shadow-lg border transition-all duration-300 transform",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-primary/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);


export const CustomToast = ({
  message,
  onClose,
  variant,
  type = "info",
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const Icon = {
    success: CheckCircle2,
    error: AlertCircle,
    info: Info,
  }[type];

  return (
    <div className={cn(toastVariants({ variant }), "animate-in fade-in slide-in-from-bottom-4")}>
      <div className="flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        <X className="w-4 h-4" />
      </button>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20 rounded-b-lg overflow-hidden">
        <div 
          className="h-full bg-primary/80 rounded-b-lg animate-progress"
          style={{ animationDuration: "5s" }}
        />
      </div>
    </div>
  );
};