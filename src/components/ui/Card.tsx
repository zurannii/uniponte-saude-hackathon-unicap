import { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils/cx";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <section className={cx("card", className)} {...props}>
      {children}
    </section>
  );
}

export function CardHeader({ children, className, ...props }: CardProps) {
  return (
    <header className={cx("card__header", className)} {...props}>
      {children}
    </header>
  );
}

export function CardTitle({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cx("card__title", className)} {...props}>
      {children}
    </h2>
  );
}

export function CardDescription({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cx("card__description", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className, ...props }: CardProps) {
  return (
    <div className={cx("card__content", className)} {...props}>
      {children}
    </div>
  );
}

