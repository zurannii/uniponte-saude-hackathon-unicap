import { Eye, FileText, Plus } from "lucide-react";
import { PageHeader } from "../../../components/common/PageHeader";
import { Button } from "../../../components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/Card";
import { universityService } from "../services/universityService";
import { StatusBadge } from "../components/StatusBadge";
import { getRiskLevelMeta } from "../utils/status";

export function ScreeningsPage() {
  const screeningCenter = universityService.getScreenings();

  return (
    <div className="page-stack">
      <PageHeader
        action={
          <Button>
            <Plus size={18} />
            Novo formulário
          </Button>
        }
        description="Centralize modelos de pré-triagem e acompanhe as respostas mais urgentes."
        title="Triagens"
      />

      <Card>
        <CardHeader>
          <CardTitle>Modelos de formulário</CardTitle>
          <CardDescription>Formulários ativos por área de atendimento.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="list-grid">
            {screeningCenter.templates.map((template) => (
              <div className="mini-card" key={template.id}>
                <div className="toolbar">
                  <div className="cluster">
                    <span className="icon-chip">
                      <FileText size={18} />
                    </span>
                    <div>
                      <h4>{template.name}</h4>
                      <p>{template.area}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="secondary">
                    <Eye size={16} />
                  </Button>
                </div>
                <p className="muted">{template.responses} respostas recebidas</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Respostas recebidas</CardTitle>
          <CardDescription>Triagens pendentes de análise clínica e social.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="table-shell">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Serviço</th>
                  <th>Data</th>
                  <th>Classificação</th>
                  <th>Risco</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {screeningCenter.responses.map((response) => {
                  const risk = getRiskLevelMeta(response.risk);

                  return (
                    <tr key={response.id}>
                      <td>{response.personName}</td>
                      <td>{response.serviceName}</td>
                      <td>{response.date}</td>
                      <td>{response.classification}</td>
                      <td>
                        <StatusBadge label={risk.label} tone={risk.tone} />
                      </td>
                      <td>
                        <Button size="sm" variant="secondary">Analisar</Button>
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

