import { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  hint?: string;
  children: ReactNode;
}

export function FormField({ label, htmlFor, hint, children }: FormFieldProps) {
  return (
    <label className="field" htmlFor={htmlFor}>
      <span className="field__label">{label}</span>
      {children}
      {hint ? <span className="field__hint">{hint}</span> : null}
    </label>
  );
}

