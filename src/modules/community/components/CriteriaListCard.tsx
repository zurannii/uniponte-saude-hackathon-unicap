import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/Card";

interface CriteriaListCardProps {
  title: string;
  icon?: ReactNode;
  items: string[];
  marker: string;
  markerClassName: string;
}

export function CriteriaListCard({
  title,
  icon,
  items,
  marker,
  markerClassName,
}: CriteriaListCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="cluster" style={{ gap: "0.55rem" }}>
            {icon}
            <span>{title}</span>
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="criteria-list">
          {items.map((item) => (
            <li className="criteria-list__item" key={item}>
              <span className={markerClassName}>{marker}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

