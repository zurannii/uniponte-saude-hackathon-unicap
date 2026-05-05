import { Heart, ArrowLeft } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { buttonClassName } from "../../../components/ui/Button";

interface CommunityLayoutProps {
  children: ReactNode;
  backTo?: string;
  backLabel?: string;
}

export function CommunityLayout({
  children,
  backTo = "/",
  backLabel = "Voltar ao início",
}: CommunityLayoutProps) {
  return (
    <div className="community-shell">
      <header className="community-header">
        <div className="community-header__inner">
          <Link className="community-header__brand" to="/">
            <span className="sidebar__brand-mark">
              <Heart size={20} />
            </span>
            <span className="sidebar__brand-title">Uniponte Saúde</span>
          </Link>
          <Link className={buttonClassName({ variant: "ghost", size: "sm" })} to={backTo}>
            <ArrowLeft size={16} />
            {backLabel}
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

