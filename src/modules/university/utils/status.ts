import { BadgeTone } from "../../../components/ui/Badge";
import { RequestStatus, RiskLevel, ServiceStatus, VacancyStatus } from "../types";

interface StatusMeta {
  label: string;
  tone: BadgeTone;
}

const serviceStatusMap: Record<ServiceStatus, StatusMeta> = {
  active: { label: "Ativo", tone: "success" },
  paused: { label: "Pausado", tone: "warning" },
  waitlist: { label: "Fila de espera", tone: "info" },
  closed: { label: "Encerrado", tone: "danger" },
};

const requestStatusMap: Record<RequestStatus, StatusMeta> = {
  new: { label: "Nova solicitação", tone: "info" },
  "pending-screening": { label: "Aguardando triagem", tone: "warning" },
  "under-review": { label: "Em análise", tone: "info" },
  approved: { label: "Aprovado", tone: "success" },
  waitlist: { label: "Lista de espera", tone: "warning" },
  "not-eligible": { label: "Não elegível", tone: "danger" },
  served: { label: "Atendido", tone: "neutral" },
};

const vacancyStatusMap: Record<VacancyStatus, StatusMeta> = {
  open: { label: "Fila ativa", tone: "success" },
  paused: { label: "Pausada", tone: "warning" },
};

const riskLevelMap: Record<RiskLevel, StatusMeta> = {
  high: { label: "Alto", tone: "danger" },
  medium: { label: "Médio", tone: "warning" },
  low: { label: "Baixo", tone: "success" },
};

export function getServiceStatusMeta(status: ServiceStatus) {
  return serviceStatusMap[status];
}

export function getRequestStatusMeta(status: RequestStatus) {
  return requestStatusMap[status];
}

export function getVacancyStatusMeta(status: VacancyStatus) {
  return vacancyStatusMap[status];
}

export function getRiskLevelMeta(risk: RiskLevel) {
  return riskLevelMap[risk];
}

