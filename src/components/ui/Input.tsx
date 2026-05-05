import { forwardRef, InputHTMLAttributes } from "react";
import { cx } from "../../utils/cx";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return <input ref={ref} className={cx("input", className)} {...props} />;
  },
);

Input.displayName = "Input";

