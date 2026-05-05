import { Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { PageHeader } from "../../../components/common/PageHeader";
import { Button } from "../../../components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/Card";
import { FormField } from "../../../components/ui/FormField";
import { Select } from "../../../components/ui/Select";
import { Textarea } from "../../../components/ui/Textarea";
import { universityService } from "../services/universityService";
import { StatusBadge } from "../components/StatusBadge";

export function CommunicationPage() {
  const communication = universityService.getCommunicationCenter();
  const [messageSent, setMessageSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessageSent(true);
  }

  return (
    <div className="page-stack">
      <PageHeader
        description="Gerencie mensagens automáticas e comunicados direcionados para inscritos."
        title="Comunicação"
      />

      <div className="grid grid--two">
        <Card>
          <CardHeader>
            <CardTitle>Mensagens automáticas</CardTitle>
            <CardDescription>Modelos base para eventos recorrentes do fluxo.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="template-list">
              {communication.templates.map((template) => (
                <div className="template-item" key={template.id}>
                  <div className="template-item__content">
                    <span className="icon-chip">
                      <Mail size={18} />
                    </span>
                    <div>
                      <p className="template-item__title">{template.title}</p>
                      <p className="template-item__text">{template.description}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="secondary">Editar</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Enviar mensagem</CardTitle>
            <CardDescription>Comunique-se com grupos filtrados de inscritos.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="stack" onSubmit={handleSubmit}>
              <FormField htmlFor="service" label="Serviço">
                <Select id="service" required>
                  <option value="">Selecione um serviço</option>
                  <option value="psicologia">Psicologia Adulto</option>
                  <option value="odontologia">Odontologia</option>
                  <option value="fisioterapia">Fisioterapia</option>
                </Select>
              </FormField>

              <FormField htmlFor="filter" label="Destinatários">
                <Select id="filter" required>
                  <option value="">Selecione um grupo</option>
                  <option value="all">Todos os inscritos</option>
                  <option value="approved">Aprovados</option>
                  <option value="waitlist">Lista de espera</option>
                  <option value="pending">Triagens pendentes</option>
                </Select>
              </FormField>

              <FormField htmlFor="message" label="Mensagem">
                <Textarea id="message" placeholder="Digite a mensagem que será enviada" required />
              </FormField>

              <Button type="submit">
                <Send size={16} />
                Enviar mensagem
              </Button>

              {messageSent ? (
                <div className="note">Mensagem preparada com sucesso. Em produção, ela seguiria para a fila de envio.</div>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Histórico recente</CardTitle>
          <CardDescription>Últimas comunicações emitidas pela instituição.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="message-list">
            {communication.history.map((message) => (
              <div className="message-item" key={message.id}>
                <div className="message-item__content">
                  <span className="icon-chip">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="message-item__title">{message.subject}</p>
                    <p className="message-item__text">
                      Para {message.recipient} em {message.date}
                    </p>
                  </div>
                </div>
                <StatusBadge label="Enviado" tone="success" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

