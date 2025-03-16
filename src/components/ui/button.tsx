type ButtonVariants = "primary" | "secondary";

import { cva } from "class-variance-authority";
import styles from "./button.module.css";
import { forwardRef } from "react";
import { Slot } from "../slot";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  asChild?: boolean;
}

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, asChild, ...props }, ref) => {
    const classes = buttonVariants({ variant, className });
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = "Button";

export { Button };
