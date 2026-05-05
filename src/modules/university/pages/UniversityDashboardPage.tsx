import { Outlet, useLocation } from "react-router-dom";
import { AppShell } from "../../../components/layout/AppShell";
import { universityNavigation } from "../constants/navigation";
import { universityService } from "../services/universityService";

export function UniversityDashboardPage() {
  const location = useLocation();
  const profile = universityService.getInstitutionProfile();
  const activeItem =
    universityNavigation.find((item) => location.pathname.startsWith(item.path)) ??
    universityNavigation[0];

  return (
    <AppShell
      institutionName={profile.name}
      institutionUnit={profile.unit}
      navigationItems={universityNavigation}
      subtitle={activeItem.description}
      title={activeItem.label}
    >
      <Outlet />
    </AppShell>
  );
}

