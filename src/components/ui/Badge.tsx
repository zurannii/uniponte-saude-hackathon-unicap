import { ReactNode } from "react";
import { cx } from "../../utils/cx";

export type BadgeTone = "neutral" | "info" | "success" | "warning" | "danger";

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}

export function Badge({
  children,
  tone = "neutral",
  className,
}: BadgeProps) {
  return <span className={cx("badge", `badge--${tone}`, className)}>{children}</span>;
}

