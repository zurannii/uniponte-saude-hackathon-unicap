import {
  Activity,
  AlertCircle,
  Calendar,
  ClipboardList,
  TrendingUp,
  Users,
} from "lucide-react";
import { MetricCard } from "../../../components/common/MetricCard";
import { PageHeader } from "../../../components/common/PageHeader";
import { BarList } from "../../../components/common/BarList";
import { Button } from "../../../components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/Card";
import { universityService } from "../services/universityService";
import { StatusBadge } from "../components/StatusBadge";
import { getRequestStatusMeta } from "../utils/status";

const metricIcons = [Activity, Calendar, Users, ClipboardList];
const alertIcons = {
  warning: AlertCircle,
  success: TrendingUp,
  danger: AlertCircle,
};

export function DashboardHomePage() {
  const overview = universityService.getDashboardOverview();

  return (
    <div className="page-stack">
      <PageHeader
        description="Gerencie os atendimentos, acompanhe filas e veja os indicadores prioritários da clínica-escola."
        title="Painel da clínica-escola"
      />

      <div className="grid grid--metrics">
        {overview.metrics.map((metric, index) => (
          <MetricCard
            detail={metric.detail}
            icon={metricIcons[index]}
            key={metric.label}
            label={metric.label}
            value={metric.value}
          />
        ))}
      </div>

      <div className="grid grid--two">
        <Card>
          <CardHeader>
            <CardTitle>Demanda por área</CardTitle>
            <CardDescription>Solicitações recebidas por especialidade.</CardDescription>
          </CardHeader>
          <CardContent>
            <BarList items={overview.demandByArea} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alertas de gestão</CardTitle>
            <CardDescription>Pontos de atenção para a coordenação agir rápido.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="alert-list">
              {overview.alerts.map((alert) => {
                const Icon = alertIcons[alert.tone];

                return (
                  <div className="alert-item" key={alert.title}>
                    <div className="alert-item__content">
                      <span className="icon-chip">
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="alert-item__title">{alert.title}</p>
                        <p className="alert-item__text">{alert.description}</p>
                      </div>
                    </div>
                    <StatusBadge label={alert.tone === "success" ? "Estável" : "Prioridade"} tone={alert.tone} />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="toolbar">
            <div>
              <CardTitle>Solicitações recentes</CardTitle>
              <CardDescription>Últimos registros de entrada no sistema.</CardDescription>
            </div>
            <Button size="sm" variant="secondary">Exportar visão rápida</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="table-shell">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Serviço</th>
                  <th>Data</th>
                  <th>Bairro</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {overview.recentRequests.map((request) => {
                  const status = getRequestStatusMeta(request.status);

                  return (
                    <tr key={request.id}>
                      <td data-label="Nome">{request.personName}</td>
                      <td data-label="Serviço">{request.serviceName}</td>
                      <td data-label="Data">{request.date}</td>
                      <td data-label="Bairro">{request.district}</td>
                      <td data-label="Status">
                        <StatusBadge label={status.label} tone={status.tone} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
