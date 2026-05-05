import { Calendar, DollarSign, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonClassName } from "../../../components/ui/Button";
import { Card, CardContent } from "../../../components/ui/Card";
import { StatusBadge } from "../../university/components/StatusBadge";
import { CommunityService } from "../types";
import { getCommunityCostMeta, getCommunityStatusMeta } from "../utils/status";

interface CommunityServiceCardProps {
  service: CommunityService;
}

export function CommunityServiceCard({ service }: CommunityServiceCardProps) {
  const status = getCommunityStatusMeta(service.status);
  const cost = getCommunityCostMeta(service.costType);

  return (
    <Card>
      <CardContent>
        <div className="toolbar">
          <div className="stack" style={{ gap: "0.8rem" }}>
            <div>
              <h3 style={{ margin: 0 }}>{service.name}</h3>
              <p className="muted" style={{ marginTop: "0.4rem" }}>
                {service.university}
              </p>
              <p className="muted">{service.shortDescription}</p>
            </div>

            <div className="service-card__badges">
              <StatusBadge label={service.area} tone="info" />
              <StatusBadge label={service.costLabel} tone={cost.tone} />
              <StatusBadge label={status.label} tone={status.tone} />
              <StatusBadge label={`${service.city} - ${service.state}`} tone="neutral" />
            </div>

            <div className="service-card__meta">
              <span>
                <MapPin size={14} style={{ display: "inline", marginRight: "0.3rem" }} />
                {service.location}
              </span>
              <span>
                <Calendar size={14} style={{ display: "inline", marginRight: "0.3rem" }} />
                {service.modality}
              </span>
              <span>
                <DollarSign size={14} style={{ display: "inline", marginRight: "0.3rem" }} />
                {service.vacanciesLabel}
              </span>
            </div>
          </div>

          <Link
            className={buttonClassName({ variant: "primary" })}
            to={`/comunidade/servico/${service.id}`}
          >
            Ver detalhes
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

