import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/utils/cn';

export const TooltipProvider = TooltipPrimitive.Provider;

/** Simple tooltip wrapper: <Tip label="..."><button/></Tip> */
export function Tip({ label, children, side = 'bottom' }: { label: React.ReactNode; children: React.ReactElement; side?: 'top' | 'bottom' | 'left' | 'right' }) {
  return (
    <TooltipPrimitive.Root delayDuration={250}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          sideOffset={6}
          className={cn(
            'z-[1100] max-w-xs rounded-lg bg-charcoal px-2.5 py-1.5 text-xs font-medium text-paper shadow-lg dark:bg-paper dark:text-charcoal',
            'animate-in fade-in-0 zoom-in-95',
          )}
        >
          {label}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
