import * as React from "react"

import { cn } from "@/lib/utils"

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full font-semibold  border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1  bg-blue-dark1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50  text-neutral-200 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 tracking-wide",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
