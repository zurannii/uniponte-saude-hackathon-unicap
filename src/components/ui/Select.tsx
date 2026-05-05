import { forwardRef, SelectHTMLAttributes } from "react";
import { cx } from "../../utils/cx";

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <select ref={ref} className={cx("select", className)} {...props}>
        {children}
      </select>
    );
  },
);

Select.displayName = "Select";

