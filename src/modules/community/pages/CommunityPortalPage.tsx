import { HeartHandshake } from "lucide-react";
import { useMemo, useState } from "react";
import { CommunityLayout } from "../components/CommunityLayout";
import { CommunityServiceCard } from "../components/CommunityServiceCard";
import { SearchField } from "../../../components/common/SearchField";
import { Card, CardContent } from "../../../components/ui/Card";
import { Select } from "../../../components/ui/Select";
import { communityService } from "../services/communityService";

export function CommunityPortalPage() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("all");
  const [cost, setCost] = useState("all");
  const [availability, setAvailability] = useState("all");

  const services = useMemo(
    () =>
      communityService.getServices({
        query,
        area,
        cost,
        availability,
      }),
    [area, availability, cost, query],
  );

  const areas = communityService.getAreas();

  return (
    <CommunityLayout>
      <section className="hero">
        <div className="hero__banner">
          <span className="hero__kicker">
            <HeartHandshake size={16} />
            Portal da comunidade
          </span>
          <h1 className="hero__title">Encontre atendimentos universitários de saúde perto de você.</h1>
          <p className="hero__text">
            Busque serviços gratuitos ou de baixo custo, compare critérios e siga para a pré-inscrição com mais clareza.
          </p>
        </div>

        <Card>
          <CardContent>
            <div className="community-filter-grid">
              <SearchField
                onChange={setQuery}
                placeholder="Buscar por área, serviço ou universidade"
                value={query}
              />

              <Select value={area} onChange={(event) => setArea(event.target.value)}>
                <option value="all">Todas as áreas</option>
                {areas.map((areaOption) => (
                  <option key={areaOption} value={areaOption}>
                    {areaOption}
                  </option>
                ))}
              </Select>

              <Select value={cost} onChange={(event) => setCost(event.target.value)}>
                <option value="all">Todos os custos</option>
                <option value="free">Gratuito</option>
                <option value="social-fee">Taxa social</option>
              </Select>

              <Select
                value={availability}
                onChange={(event) => setAvailability(event.target.value)}
              >
                <option value="all">Todos os status</option>
                <option value="open">Apenas com vagas abertas</option>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="toolbar">
          <p className="muted">{services.length} serviços encontrados</p>
        </div>

        <div className="stack">
          {services.map((service) => (
            <CommunityServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </CommunityLayout>
  );
}
