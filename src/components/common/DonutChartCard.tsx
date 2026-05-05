import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";

interface DonutSegment {
  label: string;
  value: number;
  color: string;
}

interface DonutChartCardProps {
  title: string;
  description: string;
  segments: DonutSegment[];
}

export function DonutChartCard({
  title,
  description,
  segments,
}: DonutChartCardProps) {
  const total = segments.reduce((sum, segment) => sum + segment.value, 0);
  const filled = segments
    .map((segment, index) => {
      const previousTotal = segments
        .slice(0, index)
        .reduce((sum, current) => sum + current.value, 0);
      const start = (previousTotal / total) * 100;
      const end = ((previousTotal + segment.value) / total) * 100;
      return `${segment.color} ${start}% ${end}%`;
    })
    .join(", ");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="donut-card">
          <div
            className="donut-card__chart"
            style={{ background: `conic-gradient(${filled})` }}
          >
            <div className="donut-card__center">
              <div>
                <strong>{segments[0]?.value ?? 0}%</strong>
                <div className="muted">ocupação</div>
              </div>
            </div>
          </div>
          <div className="donut-card__legend">
            {segments.map((segment) => (
              <div className="legend-row" key={segment.label}>
                <div className="legend-row__label">
                  <span
                    className="legend-row__swatch"
                    style={{ backgroundColor: segment.color }}
                  />
                  <span>{segment.label}</span>
                </div>
                <strong>{segment.value}%</strong>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

