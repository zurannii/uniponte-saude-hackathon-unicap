import { Link, useNavigate, useParams } from "react-router";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Heart, ArrowLeft, CheckCircle } from "lucide-react";
import { FormEvent, useState } from "react";

export function ServiceApplication() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const service = {
    name: "Atendimento Psicológico Adulto",
    university: "Universidade Federal de Pernambuco"
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-blue-600 fill-blue-600" />
              <span className="font-semibold">Uniponte Saúde</span>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12 max-w-2xl">
          <Card className="text-center">
            <CardContent className="p-12">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-3">Solicitação enviada com sucesso!</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Sua solicitação foi enviada. A universidade irá analisar suas informações e entrar em contato conforme a disponibilidade do serviço.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Você receberá um e-mail de confirmação em breve.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/comunidade">Buscar outros serviços</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/">Voltar ao início</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-blue-600 fill-blue-600" />
            <span className="font-semibold">Uniponte Saúde</span>
          </Link>
          <Button variant="ghost" asChild>
            <Link to={`/comunidade/servico/${id}`}>
              <ArrowLeft className="w-4 h-4" />
              Voltar aos detalhes
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-2">Pré-inscrição</h1>
            <p className="text-muted-foreground">{service.name}</p>
            <p className="text-sm text-muted-foreground">{service.university}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações pessoais</CardTitle>
                <CardDescription>Preencha seus dados para iniciar o processo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input id="name" placeholder="Digite seu nome completo" required />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Idade *</Label>
                    <Input id="age" type="number" placeholder="Ex: 25" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF *</Label>
                    <Input id="cpf" placeholder="000.000.000-00" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input id="phone" type="tel" placeholder="(00) 00000-0000" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade *</Label>
                    <Input id="city" placeholder="Ex: Recife" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="neighborhood">Bairro *</Label>
                    <Input id="neighborhood" placeholder="Ex: Boa Viagem" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Informações sobre o atendimento</CardTitle>
                <CardDescription>Ajude-nos a entender suas necessidades</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reason">Motivo da busca pelo atendimento *</Label>
                  <Textarea
                    id="reason"
                    placeholder="Descreva brevemente o motivo da sua busca"
                    rows={4}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availability">Disponibilidade de horários *</Label>
                  <Select required>
                    <SelectTrigger id="availability">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manha">Manhã</SelectItem>
                      <SelectItem value="tarde">Tarde</SelectItem>
                      <SelectItem value="noite">Noite</SelectItem>
                      <SelectItem value="flexivel">Horário flexível</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="previous">Já faz ou fez algum tipo de acompanhamento na área? *</Label>
                  <Select required>
                    <SelectTrigger id="previous">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sim">Sim, faço atualmente</SelectItem>
                      <SelectItem value="sim-passado">Sim, já fiz no passado</SelectItem>
                      <SelectItem value="nao">Não, nunca fiz</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="urgency">Há urgência no atendimento? *</Label>
                  <Select required>
                    <SelectTrigger id="urgency">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nao">Não, posso aguardar</SelectItem>
                      <SelectItem value="preferencial">Sim, mas posso aguardar um tempo</SelectItem>
                      <SelectItem value="urgente">Sim, é urgente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Consentimento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="supervised" required className="mt-1" />
                    <label htmlFor="supervised" className="text-sm text-muted-foreground">
                      Aceito que o atendimento será realizado por estudantes supervisionados *
                    </label>
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="not-urgent" required className="mt-1" />
                    <label htmlFor="not-urgent" className="text-sm text-muted-foreground">
                      Entendo que este não é um serviço de urgência e que posso aguardar na fila de espera *
                    </label>
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="terms" required className="mt-1" />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      Aceito os termos de uso e política de privacidade *
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button type="submit" size="lg" className="flex-1 bg-blue-600 hover:bg-blue-700">
                Enviar solicitação
              </Button>
              <Button type="button" size="lg" variant="outline" className="flex-1" asChild>
                <Link to={`/comunidade/servico/${id}`}>Cancelar</Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
