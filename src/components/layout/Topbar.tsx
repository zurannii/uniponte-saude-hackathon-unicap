import { Bell, LogOut, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { SearchField } from "../common/SearchField";
import { Button, buttonClassName } from "../ui/Button";

interface TopbarProps {
  title: string;
  subtitle: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  onToggleMenu: () => void;
  institutionLabel: string;
  userInitials: string;
}

export function Topbar({
  title,
  subtitle,
  searchValue,
  onSearchChange,
  onToggleMenu,
  institutionLabel,
  userInitials,
}: TopbarProps) {
  return (
    <header className="topbar">
      <div className="topbar__inner">
        <div className="topbar__meta">
          <Button
            aria-label="Abrir menu"
            className="menu-toggle"
            onClick={onToggleMenu}
            size="icon"
            variant="secondary"
          >
            <Menu size={18} />
          </Button>
          <div className="topbar__heading">
            <p className="topbar__title">{title}</p>
            <p className="topbar__subtitle">{subtitle}</p>
          </div>
        </div>

        <div className="topbar__actions">
          <SearchField
            onChange={onSearchChange}
            placeholder="Buscar serviços, pessoas ou triagens"
            value={searchValue}
          />
          <Link
            aria-label="Sair da área da universidade"
            className={buttonClassName({ size: "sm", variant: "ghost" })}
            to="/"
          >
            <LogOut size={16} />
            Sair
          </Link>
          <Button aria-label="Notificações" size="icon" variant="secondary">
            <Bell size={18} />
          </Button>
          <span className="avatar">{userInitials}</span>
          <div className="user-meta">
            <strong>Clínica-escola</strong>
            <span>{institutionLabel}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
