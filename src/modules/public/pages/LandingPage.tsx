import { ArrowRight, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonClassName } from "../../../components/ui/Button";

export function LandingPage() {
  return (
    <main className="hero">
      <section className="hero__banner">
        <span className="hero__kicker">
          <Heart size={16} />
          Plataforma para clínicas-escola e impacto social
        </span>

        <h1 className="hero__title">Conecte universidade, cuidado e comunidade.</h1>
        <p className="hero__text">
          A Uniponte Saúde organiza atendimentos, triagens, comunicação e dados de impacto em uma experiência mais clara para a instituição e para a população.
        </p>

        <div className="hero__actions">
          <Link className={buttonClassName({ variant: "primary" })} to="/universidade/login">
            Entrar como universidade
            <ArrowRight size={16} />
          </Link>
          <Link className={buttonClassName({ variant: "secondary" })} to="/comunidade">
            Ver portal da comunidade
          </Link>
        </div>
      </section>

      <section className="hero__grid">
        <article className="hero__grid-card">
          <h3>Painel institucional</h3>
          <p>Serviços, vagas, solicitações, triagens e relatórios em uma arquitetura pronta para crescer.</p>
        </article>
        <article className="hero__grid-card">
          <h3>Fluxo mais claro</h3>
          <p>Separação entre layout, dados mockados, componentes compartilhados e domínio de negócio.</p>
        </article>
        <article className="hero__grid-card">
          <h3>Base para escalar</h3>
          <p>Organização preparada para APIs, autenticação real, analytics e multitenancy institucional.</p>
        </article>
      </section>

      <section className="hero__grid-card">
        <div className="cluster">
          <span className="icon-chip">
            <Users size={18} />
          </span>
          <div>
            <h3>Objetivo do projeto</h3>
            <p>
              Portal web híbrido: site institucional na entrada e dashboard operacional para universidades com serviços de saúde à comunidade.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

