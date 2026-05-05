import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "../ui/Card";

interface MetricCardProps {
  label: string;
  value: string;
  detail?: string;
  icon: LucideIcon;
}

export function MetricCard({
  label,
  value,
  detail,
  icon: Icon,
}: MetricCardProps) {
  return (
    <Card>
      <CardContent>
        <div className="metric-card">
          <div>
            <p className="metric-card__label">{label}</p>
            <p className="metric-card__value">{value}</p>
            {detail ? <p className="metric-card__detail">{detail}</p> : null}
          </div>
          <span className="icon-chip">
            <Icon size={22} />
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

