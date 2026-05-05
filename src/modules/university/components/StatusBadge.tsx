import { Badge } from "../../../components/ui/Badge";

interface StatusBadgeProps {
  label: string;
  tone: "neutral" | "info" | "success" | "warning" | "danger";
}

export function StatusBadge({ label, tone }: StatusBadgeProps) {
  return <Badge tone={tone}>{label}</Badge>;
}

