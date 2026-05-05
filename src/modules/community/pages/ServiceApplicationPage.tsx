import { FormEvent, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, buttonClassName } from "../../../components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/Card";
import { FormField } from "../../../components/ui/FormField";
import { Input } from "../../../components/ui/Input";
import { Select } from "../../../components/ui/Select";
import { Textarea } from "../../../components/ui/Textarea";
import { CommunityLayout } from "../components/CommunityLayout";
import { communityService } from "../services/communityService";
import { CheckCircle } from "lucide-react";

export function ServiceApplicationPage() {
  const { id } = useParams();
  const service = communityService.getServiceById(Number(id));
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (!service) {
    return (
      <CommunityLayout backLabel="Voltar à busca" backTo="/comunidade">
        <main className="hero">
          <Card>
            <CardContent className="stack">
              <h1 style={{ margin: 0 }}>Serviço não encontrado</h1>
              <p className="muted">
                Não foi possível carregar os dados da pré-inscrição solicitada.
              </p>
              <Link className={buttonClassName({ variant: "primary" })} to="/comunidade">
                Voltar para a comunidade
              </Link>
            </CardContent>
          </Card>
        </main>
      </CommunityLayout>
    );
  }

  if (submitted) {
    return (
      <CommunityLayout>
        <main className="hero">
          <Card>
            <CardContent className="stack community-success-card">
              <span className="community-success-card__icon">
                <CheckCircle size={28} />
              </span>
              <h1 style={{ margin: 0 }}>Solicitação enviada com sucesso</h1>
              <p className="muted">
                Sua pré-inscrição foi registrada. A universidade vai analisar suas informações e entrar em contato conforme a disponibilidade do serviço.
              </p>
              <p className="muted">Você receberá uma confirmação por e-mail no próximo passo real do fluxo.</p>
              <div className="cluster" style={{ justifyContent: "center" }}>
                <Link className={buttonClassName({ variant: "primary" })} to="/comunidade">
                  Buscar outros serviços
                </Link>
                <Link className={buttonClassName({ variant: "secondary" })} to="/">
                  Voltar ao início
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
      </CommunityLayout>
    );
  }

  return (
    <CommunityLayout backLabel="Voltar aos detalhes" backTo={`/comunidade/servico/${id}`}>
      <main className="hero">
        <div className="page-stack">
          <div style={{ textAlign: "center" }}>
            <h1 className="page-header__title">Pré-inscrição</h1>
            <p className="muted">{service.name}</p>
            <p className="muted">{service.university}</p>
          </div>

          <form className="page-stack" onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Informações pessoais</CardTitle>
                <CardDescription>Preencha seus dados para iniciar o processo.</CardDescription>
              </CardHeader>
              <CardContent className="stack">
                <FormField htmlFor="name" label="Nome completo">
                  <Input id="name" required />
                </FormField>

                <div className="form-grid">
                  <FormField htmlFor="age" label="Idade">
                    <Input id="age" min="0" required type="number" />
                  </FormField>
                  <FormField htmlFor="cpf" label="CPF">
                    <Input id="cpf" required />
                  </FormField>
                </div>

                <div className="form-grid">
                  <FormField htmlFor="email" label="E-mail">
                    <Input id="email" required type="email" />
                  </FormField>
                  <FormField htmlFor="phone" label="Telefone">
                    <Input id="phone" required type="tel" />
                  </FormField>
                </div>

                <div className="form-grid">
                  <FormField htmlFor="city" label="Cidade">
                    <Input id="city" required />
                  </FormField>
                  <FormField htmlFor="neighborhood" label="Bairro">
                    <Input id="neighborhood" required />
                  </FormField>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Informações sobre o atendimento</CardTitle>
                <CardDescription>Ajude a equipe a entender seu contexto.</CardDescription>
              </CardHeader>
              <CardContent className="stack">
                <FormField htmlFor="reason" label="Motivo da busca pelo atendimento">
                  <Textarea id="reason" required />
                </FormField>

                <FormField htmlFor="availability" label="Disponibilidade de horários">
                  <Select id="availability" required>
                    <option value="">Selecione</option>
                    <option value="morning">Manhã</option>
                    <option value="afternoon">Tarde</option>
                    <option value="night">Noite</option>
                    <option value="flexible">Horário flexível</option>
                  </Select>
                </FormField>

                <FormField
                  htmlFor="previousFollowUp"
                  label="Já faz ou fez algum acompanhamento na área?"
                >
                  <Select id="previousFollowUp" required>
                    <option value="">Selecione</option>
                    <option value="current">Sim, faço atualmente</option>
                    <option value="past">Sim, já fiz no passado</option>
                    <option value="never">Não, nunca fiz</option>
                  </Select>
                </FormField>

                <FormField htmlFor="urgency" label="Há urgência no atendimento?">
                  <Select id="urgency" required>
                    <option value="">Selecione</option>
                    <option value="no">Não, posso aguardar</option>
                    <option value="preferred">Sim, mas posso aguardar um tempo</option>
                    <option value="urgent">Sim, é urgente</option>
                  </Select>
                </FormField>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Consentimento</CardTitle>
              </CardHeader>
              <CardContent className="stack">
                <label className="community-checkbox">
                  <input required type="checkbox" />
                  <span>
                    Aceito que o atendimento será realizado por estudantes supervisionados.
                  </span>
                </label>
                <label className="community-checkbox">
                  <input required type="checkbox" />
                  <span>
                    Entendo que este não é um serviço de urgência e que posso aguardar em fila.
                  </span>
                </label>
                <label className="community-checkbox">
                  <input required type="checkbox" />
                  <span>Aceito os termos de uso e a política de privacidade.</span>
                </label>
              </CardContent>
            </Card>

            <div className="cluster">
              <Button type="submit">Enviar solicitação</Button>
              <Link
                className={buttonClassName({ variant: "secondary" })}
                to={`/comunidade/servico/${id}`}
              >
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </main>
    </CommunityLayout>
  );
}
