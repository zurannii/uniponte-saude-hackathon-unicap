import { Download, Eye, Pause, Plus } from "lucide-react";
import { PageHeader } from "../../../components/common/PageHeader";
import { MetricCard } from "../../../components/common/MetricCard";
import { Button } from "../../../components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/Card";
import { universityService } from "../services/universityService";
import { StatusBadge } from "../components/StatusBadge";
import { getVacancyStatusMeta } from "../utils/status";

export function VacanciesPage() {
  const vacancies = universityService.getVacancyRecords();
  const totals = vacancies.reduce(
    (accumulator, vacancy) => ({
      openSlots: accumulator.openSlots + vacancy.openSlots,
      pending: accumulator.pending + vacancy.pendingScreenings,
      waitlist: accumulator.waitlist + vacancy.waitlist,
    }),
    { openSlots: 0, pending: 0, waitlist: 0 },
  );

  return (
    <div className="page-stack">
      <PageHeader
        description="Acompanhe disponibilidade, ocupação e pressão de fila por serviço."
        title="Gestão de vagas"
      />

      <div className="grid grid--three">
        <MetricCard detail="Distribuídas entre 4 serviços" icon={Plus} label="Vagas abertas" value={String(totals.openSlots)} />
        <MetricCard detail="Exigem revisão de elegibilidade" icon={Pause} label="Triagens pendentes" value={String(totals.pending)} />
        <MetricCard detail="Pessoas aguardando encaixe" icon={Download} label="Lista de espera" value={String(totals.waitlist)} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Vagas por serviço</CardTitle>
          <CardDescription>Controle da ocupação e da fila operacional.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="table-shell">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Serviço</th>
                  <th>Vagas abertas</th>
                  <th>Inscritos</th>
                  <th>Triagens pendentes</th>
                  <th>Lista de espera</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {vacancies.map((vacancy) => {
                  const status = getVacancyStatusMeta(vacancy.status);

                  return (
                    <tr key={vacancy.serviceName}>
                      <td data-label="Serviço">{vacancy.serviceName}</td>
                      <td data-label="Vagas abertas">{vacancy.openSlots}</td>
                      <td data-label="Inscritos">{vacancy.enrolled}</td>
                      <td data-label="Triagens pendentes">{vacancy.pendingScreenings}</td>
                      <td data-label="Lista de espera">{vacancy.waitlist}</td>
                      <td data-label="Status">
                        <StatusBadge label={status.label} tone={status.tone} />
                      </td>
                      <td data-label="Ações">
                        <div className="data-table__actions">
                          <Button size="sm" variant="secondary">
                            <Plus size={16} />
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Pause size={16} />
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Eye size={16} />
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Download size={16} />
                          </Button>
                        </div>
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
