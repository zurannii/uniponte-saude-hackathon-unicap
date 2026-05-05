import { Link, useNavigate, useParams } from "react-router";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Heart, ArrowLeft, MapPin, Calendar, DollarSign, Clock, Users, FileText, AlertCircle, Building2 } from "lucide-react";

export function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = {
    id: 1,
    name: "Atendimento Psicológico Adulto",
    university: "Universidade Federal de Pernambuco",
    area: "Psicologia",
    cost: "Gratuito",
    status: "Vagas abertas",
    location: "Av. Prof. Moraes Rego, 1235 - Cidade Universitária, Recife - PE",
    modality: "Presencial",
    description: "Atendimento psicológico supervisionado por estudantes de graduação em Psicologia sob coordenação de professores doutores da UFPE. O serviço é voltado para adultos maiores de 18 anos que buscam acompanhamento terapêutico.",
    audience: "Adultos acima de 18 anos",
    criteria: [
      "Ter mais de 18 anos",
      "Residir em Recife ou Região Metropolitana",
      "Disponibilidade para atendimento semanal",
      "Aceitar atendimento supervisionado por estudantes"
    ],
    exclusions: [
      "Casos de urgência ou emergência psiquiátrica",
      "Pessoas em tratamento psiquiátrico ativo sem encaminhamento médico",
      "Menores de 18 anos"
    ],
    documents: [
      "RG ou CPF",
      "Comprovante de residência",
      "Encaminhamento médico (se houver)"
    ],
    schedule: "Segundas, quartas e sextas-feiras, das 14h às 18h",
    vacancies: "20 vagas disponíveis"
  };

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
            <Link to="/comunidade">
              <ArrowLeft className="w-4 h-4" />
              Voltar à busca
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-3">{service.name}</h1>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Building2 className="w-4 h-4" />
              <span>{service.university}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {service.area}
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <DollarSign className="w-3 h-3" />
                {service.cost}
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <Calendar className="w-3 h-3" />
                {service.status}
              </Badge>
              <Badge variant="outline">
                {service.modality}
              </Badge>
            </div>
          </div>

          {/* CTA Buttons */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h3 className="font-semibold text-lg mb-1">Interessado neste atendimento?</h3>
                  <p className="text-sm text-muted-foreground">
                    Faça sua pré-inscrição ou receba alertas quando houver novas vagas
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => navigate(`/comunidade/inscricao/${id}`)}
                  >
                    Entrar na fila
                  </Button>
                  <Button size="lg" variant="outline">
                    Receber alerta de vagas
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>Sobre o atendimento</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </CardContent>
          </Card>

          {/* Details grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.location}</p>
                <p className="text-sm text-muted-foreground mt-2">Modalidade: {service.modality}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Horários
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.schedule}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Público atendido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.audience}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Disponibilidade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.vacancies}</p>
              </CardContent>
            </Card>
          </div>

          {/* Criteria */}
          <Card>
            <CardHeader>
              <CardTitle>Critérios de inclusão</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.criteria.map((criterion, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    <span className="text-muted-foreground">{criterion}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Exclusions */}
          <Card>
            <CardHeader>
              <CardTitle>Critérios de exclusão</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.exclusions.map((exclusion, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-red-600 shrink-0">✗</span>
                    <span className="text-muted-foreground">{exclusion}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Documentos necessários
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.documents.map((doc, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-blue-600 shrink-0">•</span>
                    <span className="text-muted-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Important notice */}
          <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Importante</h4>
                  <p className="text-sm text-muted-foreground">
                    Este atendimento é supervisionado pela universidade e não substitui serviços de urgência.
                    Em casos de emergência, procure um pronto-socorro ou ligue para 192 (SAMU).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              onClick={() => navigate(`/comunidade/inscricao/${id}`)}
            >
              Fazer pré-inscrição
            </Button>
            <Button size="lg" variant="outline" className="flex-1" asChild>
              <Link to="/comunidade">Buscar outros serviços</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
