import { useMemo, useState } from "react";
import { PageHeader } from "../../../components/common/PageHeader";
import { SearchField } from "../../../components/common/SearchField";
import { Button } from "../../../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/Card";
import { Select } from "../../../components/ui/Select";
import { universityService } from "../services/universityService";
import { StatusBadge } from "../components/StatusBadge";
import { getRequestStatusMeta } from "../utils/status";

export function RequestsPage() {
  const requests = universityService.getRequests();
  const [search, setSearch] = useState("");
  const [areaFilter, setAreaFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredRequests = useMemo(() => {
    return requests.filter((request) => {
      const matchesSearch = request.personName.toLowerCase().includes(search.toLowerCase());
      const matchesArea = areaFilter === "all" || request.area === areaFilter;
      const matchesStatus = statusFilter === "all" || request.status === statusFilter;
      return matchesSearch && matchesArea && matchesStatus;
    });
  }, [areaFilter, requests, search, statusFilter]);

  return (
    <div className="page-stack">
      <PageHeader
        description="Acompanhe as pessoas interessadas e organize o fluxo de entrada com filtros simples."
        title="Solicitações e fila"
      />

      <Card>
        <CardHeader>
          <div className="toolbar">
            <SearchField
              onChange={setSearch}
              placeholder="Buscar por nome da pessoa"
              value={search}
            />
            <div className="cluster">
              <Select value={areaFilter} onChange={(event) => setAreaFilter(event.target.value)}>
                <option value="all">Todas as áreas</option>
                <option value="Psicologia">Psicologia</option>
                <option value="Odontologia">Odontologia</option>
                <option value="Fisioterapia">Fisioterapia</option>
                <option value="Nutrição">Nutrição</option>
              </Select>
              <Select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                <option value="all">Todos os status</option>
                <option value="new">Nova solicitação</option>
                <option value="pending-screening">Aguardando triagem</option>
                <option value="approved">Aprovado</option>
                <option value="waitlist">Lista de espera</option>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="table-shell">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Serviço solicitado</th>
                  <th>Data</th>
                  <th>Bairro/Cidade</th>
                  <th>Status</th>
                  <th>Resultado da triagem</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((request) => {
                  const status = getRequestStatusMeta(request.status);

                  return (
                    <tr key={request.id}>
                      <td>{request.personName}</td>
                      <td>{request.serviceName}</td>
                      <td>{request.date}</td>
                      <td>{request.district}</td>
                      <td>
                        <StatusBadge label={status.label} tone={status.tone} />
                      </td>
                      <td>{request.screeningResult}</td>
                      <td>
                        <Button size="sm" variant="secondary">Ver detalhes</Button>
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

