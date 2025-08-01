import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold uppercase tracking-wide ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 smooth-transition font-body",
  {
    variants: {
      variant: {
        default: "bg-[#98361F] text-[#FEF9ED] hover:bg-[#98361F]/90 shadow-md hover:shadow-lg",
        destructive:
          "bg-[#98361F] text-[#FEF9ED] hover:bg-[#98361F]/90 shadow-md hover:shadow-lg",
        outline:
          "border-2 border-[#98361F] bg-[#98361F] text-[#FEF9ED] hover:bg-[#98361F]/90 shadow-md hover:shadow-lg",
        secondary:
          "bg-[#98361F] text-[#FEF9ED] hover:bg-[#98361F]/90 shadow-md hover:shadow-lg",
        ghost: "bg-[#98361F] text-[#FEF9ED] hover:bg-[#98361F]/90",
        link: "bg-[#98361F] text-[#FEF9ED] underline-offset-4 hover:underline",
        cta: "bg-[#98361F] text-[#FEF9ED] hover:bg-[#98361F]/90 shadow-lg hover:shadow-xl transform hover:scale-105",
        ctaSecondary: "bg-[#98361F] text-[#FEF9ED] hover:bg-[#98361F]/90 shadow-lg hover:shadow-xl transform hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
