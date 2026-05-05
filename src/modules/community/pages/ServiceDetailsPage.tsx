import {
  AlertCircle,
  Building2,
  Calendar,
  Clock,
  FileText,
  MapPin,
  Users,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, buttonClassName } from "../../../components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/Card";
import { StatusBadge } from "../../university/components/StatusBadge";
import { CommunityLayout } from "../components/CommunityLayout";
import { CriteriaListCard } from "../components/CriteriaListCard";
import { communityService } from "../services/communityService";
import { getCommunityCostMeta, getCommunityStatusMeta } from "../utils/status";

export function ServiceDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = communityService.getServiceById(Number(id));

  if (!service) {
    return (
      <CommunityLayout backLabel="Voltar à busca" backTo="/comunidade">
        <main className="hero">
          <Card>
            <CardContent className="stack">
              <h1 style={{ margin: 0 }}>Serviço não encontrado</h1>
              <p className="muted">
                O identificador informado não corresponde a um atendimento disponível no portal.
              </p>
              <Link className={buttonClassName({ variant: "primary" })} to="/comunidade">
                Buscar outros serviços
              </Link>
            </CardContent>
          </Card>
        </main>
      </CommunityLayout>
    );
  }

  const status = getCommunityStatusMeta(service.status);
  const cost = getCommunityCostMeta(service.costType);

  return (
    <CommunityLayout backLabel="Voltar à busca" backTo="/comunidade">
      <main className="hero">
        <div className="page-stack">
          <div>
            <h1 className="page-header__title">{service.name}</h1>
            <div className="service-card__meta" style={{ marginTop: "0.75rem" }}>
              <span>
                <Building2 size={14} style={{ display: "inline", marginRight: "0.3rem" }} />
                {service.university}
              </span>
            </div>
            <div className="service-card__badges" style={{ marginTop: "1rem" }}>
              <StatusBadge label={service.area} tone="info" />
              <StatusBadge label={service.costLabel} tone={cost.tone} />
              <StatusBadge label={status.label} tone={status.tone} />
              <StatusBadge label={service.modality} tone="neutral" />
            </div>
          </div>

          <Card className="community-cta-card">
            <CardContent>
              <div className="toolbar">
                <div>
                  <h3 style={{ margin: 0 }}>Interessado neste atendimento?</h3>
                  <p className="muted">
                    Faça sua pré-inscrição ou acompanhe a disponibilidade do serviço.
                  </p>
                </div>
                <div className="cluster">
                  <Button onClick={() => navigate(`/comunidade/inscricao/${service.id}`)}>
                    Entrar na fila
                  </Button>
                  <Button variant="secondary">Receber alerta de vagas</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sobre o atendimento</CardTitle>
              <CardDescription>
                Resumo do serviço, público esperado e formato de acompanhamento.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="muted" style={{ lineHeight: 1.7 }}>
                {service.description}
              </p>
            </CardContent>
          </Card>

          <div className="grid grid--two">
            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="cluster" style={{ gap: "0.55rem" }}>
                    <MapPin size={18} />
                    <span>Localização</span>
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="muted">{service.location}</p>
                <p className="muted" style={{ marginTop: "0.6rem" }}>
                  Modalidade: {service.modality}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="cluster" style={{ gap: "0.55rem" }}>
                    <Clock size={18} />
                    <span>Horários</span>
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="muted">{service.schedule}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="cluster" style={{ gap: "0.55rem" }}>
                    <Users size={18} />
                    <span>Público atendido</span>
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="muted">{service.audience}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="cluster" style={{ gap: "0.55rem" }}>
                    <Calendar size={18} />
                    <span>Disponibilidade</span>
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="muted">{service.vacanciesLabel}</p>
              </CardContent>
            </Card>
          </div>

          <CriteriaListCard
            items={service.criteria}
            marker="✓"
            markerClassName="criteria-list__marker criteria-list__marker--positive"
            title="Critérios de inclusão"
          />

          <CriteriaListCard
            items={service.exclusions}
            marker="×"
            markerClassName="criteria-list__marker criteria-list__marker--negative"
            title="Critérios de exclusão"
          />

          <CriteriaListCard
            icon={<FileText size={18} />}
            items={service.documents}
            marker="•"
            markerClassName="criteria-list__marker criteria-list__marker--info"
            title="Documentos necessários"
          />

          <Card className="community-warning-card">
            <CardContent>
              <div className="alert-item__content">
                <span className="icon-chip">
                  <AlertCircle size={18} />
                </span>
                <div>
                  <p className="alert-item__title">Importante</p>
                  <p className="alert-item__text">
                    Este atendimento é supervisionado pela universidade e não substitui serviços de urgência.
                    Em casos emergenciais, procure um pronto-socorro ou ligue para 192.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="cluster">
            <Button onClick={() => navigate(`/comunidade/inscricao/${service.id}`)}>
              Fazer pré-inscrição
            </Button>
            <Link className={buttonClassName({ variant: "secondary" })} to="/comunidade">
              Buscar outros serviços
            </Link>
          </div>
        </div>
      </main>
    </CommunityLayout>
  );
}
