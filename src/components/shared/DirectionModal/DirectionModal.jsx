// components/ui/direction-modal.jsx
'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export function DirectionModal({
  isOpen,
  onClose,
  children,
  direction = 'right',
  title,
  description,
  className,
  showCloseButton = true,
  size = 'md',
  overlayClassName,
  closeOnOverlayClick = true,
  preventClose = false,
  customHeader,
  hideHeader = false,
  contentClassName,
}) {
  // Size classes for different modal sizes
  const sizeClasses = {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md', 
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl',
    '3xl': 'sm:max-w-3xl',
    full: 'w-full max-w-full',
  };

  // Height classes for top/bottom directions
  const heightClasses = {
    sm: 'h-1/3',
    md: 'h-1/2',
    lg: 'h-2/3',
    xl: 'h-3/4',
    full: 'h-full',
  };

  const handleOpenChange = (open) => {
    if (!open && preventClose) {
      return;
    }
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={preventClose ? undefined : handleOpenChange}>
      <SheetContent
        side={direction}
        className={cn(
          'flex flex-col',
          (direction === 'left' || direction === 'right') && sizeClasses[size],
          (direction === 'top' || direction === 'bottom') && heightClasses[size],
          (direction === 'left' || direction === 'right') && 'h-full',
          className
        )}
        overlayClassName={overlayClassName}
        onInteractOutside={(e) => {
          if (preventClose || !closeOnOverlayClick) {
            e.preventDefault();
          }
        }}
      >
        {/* Custom Header */}
        {customHeader && (
          <div className="flex-shrink-0">
            {customHeader}
          </div>
        )}

        {/* Default Header */}
        {!hideHeader && !customHeader && (title || description) && (
          <SheetHeader className="flex-shrink-0 text-left px-6 pt-6 pb-4 border-b">
            {title && (
              <SheetTitle className="text-xl font-semibold text-gray-900">
                {title}
              </SheetTitle>
            )}
            {description && (
              <SheetDescription className="text-base text-gray-600 mt-1">
                {description}
              </SheetDescription>
            )}
          </SheetHeader>
        )}

        {/* Content Area */}
        <div className={cn(
          'flex-1 overflow-auto',
          contentClassName
        )}>
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
}