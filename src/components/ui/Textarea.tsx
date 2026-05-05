import { forwardRef, TextareaHTMLAttributes } from "react";
import { cx } from "../../utils/cx";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return <textarea ref={ref} className={cx("textarea", className)} {...props} />;
});

Textarea.displayName = "Textarea";

