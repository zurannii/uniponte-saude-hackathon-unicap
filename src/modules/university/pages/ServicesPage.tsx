import { Calendar, Edit, Eye, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "../../../components/common/PageHeader";
import { Button, buttonClassName } from "../../../components/ui/Button";
import { Card, CardContent } from "../../../components/ui/Card";
import { universityService } from "../services/universityService";
import { StatusBadge } from "../components/StatusBadge";
import { getServiceStatusMeta } from "../utils/status";

export function ServicesPage() {
  const serviceList = universityService.getServices();

  return (
    <div className="page-stack">
      <PageHeader
        action={
          <Link className={buttonClassName({ variant: "primary" })} to="/universidade/servicos/novo">
            <Plus size={18} />
            Cadastrar novo serviço
          </Link>
        }
        description="Cadastre, organize e acompanhe os atendimentos oferecidos pela sua instituição."
        title="Serviços de saúde"
      />

      <div className="stack">
        {serviceList.map((service) => {
          const status = getServiceStatusMeta(service.status);

          return (
            <Card key={service.id}>
              <CardContent>
                <div className="toolbar">
                  <div className="stack" style={{ gap: "0.75rem" }}>
                    <div>
                      <h3 style={{ margin: 0 }}>{service.name}</h3>
                      <div className="service-card__meta">
                        <span>{service.area}</span>
                        <span>•</span>
                        <span>{service.campus}</span>
                        <span>•</span>
                        <span>{service.modality}</span>
                      </div>
                    </div>

                    <div className="service-card__badges">
                      <StatusBadge label={service.cost} tone="info" />
                      <StatusBadge label={status.label} tone={status.tone} />
                      <StatusBadge label={`${service.vacancies} vagas`} tone="neutral" />
                    </div>

                    <p className="muted">{service.description}</p>
                  </div>

                  <div className="data-table__actions">
                    <Button size="sm" variant="secondary">
                      <Eye size={16} />
                      Ver detalhes
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Calendar size={16} />
                      Gerenciar vagas
                    </Button>
                    <Link
                      className={buttonClassName({ size: "sm", variant: "secondary" })}
                      to={`/universidade/servicos/editar/${service.id}`}
                    >
                      <Edit size={16} />
                      Editar
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

