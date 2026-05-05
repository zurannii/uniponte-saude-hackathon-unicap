import { ReactNode, useState } from "react";
import { NavItem } from "../../modules/university/types";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

interface AppShellProps {
  children: ReactNode;
  navigationItems: NavItem[];
  title: string;
  subtitle: string;
  institutionName: string;
  institutionUnit: string;
}

export function AppShell({
  children,
  navigationItems,
  title,
  subtitle,
  institutionName,
  institutionUnit,
}: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="app-shell">
        <Sidebar
          institutionName={institutionName}
          institutionUnit={institutionUnit}
          items={navigationItems}
          onNavigate={() => setSidebarOpen(false)}
          open={sidebarOpen}
        />

        <div className="shell-main">
          <Topbar
            institutionLabel={institutionUnit}
            onSearchChange={setSearchValue}
            onToggleMenu={() => setSidebarOpen((current) => !current)}
            searchValue={searchValue}
            subtitle={subtitle}
            title={title}
            userInitials="CE"
          />
          <main className="shell-content">{children}</main>
        </div>
      </div>

      {sidebarOpen ? (
        <button
          aria-label="Fechar menu"
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          type="button"
        />
      ) : null}
    </>
  );
}

