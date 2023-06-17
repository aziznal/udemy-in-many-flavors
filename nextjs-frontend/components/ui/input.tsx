import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `
            flex
            w-full
            border
            border-zinc-900
            bg-transparent
            px-4
            py-5
            text-sm
            font-bold
            ring-offset-background
            file:border-0
            file:bg-transparent
            file:text-sm
            file:font-medium
            placeholder:text-zinc-900
            focus-visible:outline-none
            disabled:cursor-not-allowed disabled:opacity-50
          `,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
