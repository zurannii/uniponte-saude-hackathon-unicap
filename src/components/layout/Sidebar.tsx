import { Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cx } from "../../utils/cx";
import { NavItem } from "../../modules/university/types";

interface SidebarProps {
  items: NavItem[];
  institutionName: string;
  institutionUnit: string;
  open: boolean;
  onNavigate: () => void;
}

export function Sidebar({
  items,
  institutionName,
  institutionUnit,
  open,
  onNavigate,
}: SidebarProps) {
  return (
    <aside className="sidebar" data-open={open}>
      <div className="sidebar__brand">
        <span className="sidebar__brand-mark">
          <Heart size={22} />
        </span>
        <div className="sidebar__brand-text">
          <span className="sidebar__brand-title">{institutionName}</span>
          <span className="sidebar__brand-subtitle">{institutionUnit}</span>
        </div>
      </div>

      <nav className="sidebar__nav">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              className={({ isActive }) =>
                cx("sidebar__link", isActive && "sidebar__link--active")
              }
              key={item.path}
              onClick={onNavigate}
              to={item.path}
            >
              <Icon size={20} />
              <span className="sidebar__link-label">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
