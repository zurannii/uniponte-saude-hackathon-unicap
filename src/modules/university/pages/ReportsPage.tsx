import { Clock3, TrendingUp, Users } from "lucide-react";
import { BarList } from "../../../components/common/BarList";
import { DonutChartCard } from "../../../components/common/DonutChartCard";
import { MetricCard } from "../../../components/common/MetricCard";
import { PageHeader } from "../../../components/common/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/Card";
import { universityService } from "../services/universityService";

const metricIcons = [Users, TrendingUp, Clock3, TrendingUp];

export function ReportsPage() {
  const reports = universityService.getReportsOverview();

  return (
    <div className="page-stack">
      <PageHeader
        description="Transforme dados de acesso e ocupação em uma leitura simples para coordenação e direção."
        title="Relatórios e impacto"
      />

      <div className="grid grid--metrics">
        {reports.metrics.map((metric, index) => (
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
            <CardTitle>Atendimentos por área</CardTitle>
            <CardDescription>Total acumulado de atendimentos por especialidade.</CardDescription>
          </CardHeader>
          <CardContent>
            <BarList items={reports.attendanceByArea} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tendência mensal</CardTitle>
            <CardDescription>Evolução dos atendimentos ao longo do semestre.</CardDescription>
          </CardHeader>
          <CardContent>
            <BarList items={reports.monthlyTrend} />
          </CardContent>
        </Card>

        <DonutChartCard
          description="Percentual de vagas ocupadas versus disponíveis."
          segments={reports.occupancyData}
          title="Ocupação de vagas"
        />

        <Card>
          <CardHeader>
            <CardTitle>Demanda por região</CardTitle>
            <CardDescription>Concentração de solicitações por bairro.</CardDescription>
          </CardHeader>
          <CardContent>
            <BarList items={reports.regionalDemand} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Serviços mais buscados</CardTitle>
          <CardDescription>Ranking de procura e variação recente de demanda.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rank-list">
            {reports.topServices.map((service) => (
              <div className="rank-row" key={service.rank}>
                <span className="rank-row__index">{service.rank}</span>
                <div>
                  <h4 className="rank-list__title">{service.service}</h4>
                  <p className="rank-list__text">{service.requests} solicitações</p>
                </div>
                <span className={service.trend.startsWith("+") ? "trend-positive" : "trend-negative"}>
                  {service.trend}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

