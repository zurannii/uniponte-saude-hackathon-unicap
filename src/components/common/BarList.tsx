interface BarListItem {
  label: string;
  value: number;
  suffix?: string;
}

interface BarListProps {
  items: BarListItem[];
}

export function BarList({ items }: BarListProps) {
  const maxValue = Math.max(...items.map((item) => item.value), 1);

  return (
    <div className="bar-list">
      {items.map((item) => {
        const percentage = Math.max((item.value / maxValue) * 100, 6);

        return (
          <div className="bar-list__row" key={item.label}>
            <div className="bar-list__meta">
              <span>{item.label}</span>
              <strong>
                {item.value}
                {item.suffix ?? ""}
              </strong>
            </div>
            <div className="bar-list__track">
              <div className="bar-list__fill" style={{ width: `${percentage}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

