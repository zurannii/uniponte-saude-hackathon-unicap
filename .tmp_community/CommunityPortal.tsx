import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Heart, Search, MapPin, DollarSign, Calendar, ArrowLeft } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Atendimento Psicológico Adulto",
    university: "Universidade Federal de Pernambuco",
    area: "Psicologia",
    cost: "Gratuito",
    status: "Vagas abertas",
    location: "Recife - PE",
    description: "Atendimento psicológico supervisionado para adultos acima de 18 anos"
  },
  {
    id: 2,
    name: "Odontologia - Limpeza e Restauração",
    university: "UFPE - Campus Recife",
    area: "Odontologia",
    cost: "Taxa social R$ 20",
    status: "Fila de espera",
    location: "Recife - PE",
    description: "Serviços odontológicos básicos com taxa social acessível"
  },
  {
    id: 3,
    name: "Fisioterapia Ortopédica",
    university: "Universidade de Pernambuco",
    area: "Fisioterapia",
    cost: "Gratuito",
    status: "Vagas abertas",
    location: "Recife - PE",
    description: "Reabilitação musculoesquelética supervisionada"
  },
  {
    id: 4,
    name: "Avaliação Nutricional",
    university: "UFPE - Nutrição",
    area: "Nutrição",
    cost: "Gratuito",
    status: "Vagas abertas",
    location: "Recife - PE",
    description: "Avaliação e orientação nutricional individual"
  },
  {
    id: 5,
    name: "Fonoaudiologia Infantil",
    university: "Universidade Católica de Pernambuco",
    area: "Fonoaudiologia",
    cost: "Gratuito",
    status: "Inscrições encerradas",
    location: "Recife - PE",
    description: "Atendimento fonoaudiológico para crianças de 3 a 12 anos"
  },
];

export function CommunityPortal() {
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
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 px-4 bg-gradient-to-b from-blue-50 to-background dark:from-blue-950/20">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Encontre atendimentos universitários de saúde gratuitos ou de baixo custo
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Busque serviços perto de você e descubra como acessar atendimento supervisionado em universidades.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 px-4 border-b bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Buscar por área ou serviço..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Área de atendimento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas as áreas</SelectItem>
                <SelectItem value="psicologia">Psicologia</SelectItem>
                <SelectItem value="odontologia">Odontologia</SelectItem>
                <SelectItem value="fisioterapia">Fisioterapia</SelectItem>
                <SelectItem value="nutricao">Nutrição</SelectItem>
                <SelectItem value="fonoaudiologia">Fonoaudiologia</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Custo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="gratuito">Gratuito</SelectItem>
                <SelectItem value="taxa">Taxa social</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="vagas">Apenas com vagas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="text-muted-foreground">{services.length} serviços encontrados</p>
          </div>
          <div className="grid gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:border-blue-600/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{service.university}</p>
                        <p className="text-sm">{service.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {service.area}
                        </Badge>
                        {service.cost.startsWith("Gratuito") ? (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            <DollarSign className="w-3 h-3" />
                            {service.cost}
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                            <DollarSign className="w-3 h-3" />
                            {service.cost}
                          </Badge>
                        )}
                        {service.status === "Vagas abertas" && (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            <Calendar className="w-3 h-3" />
                            {service.status}
                          </Badge>
                        )}
                        {service.status === "Fila de espera" && (
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                            <Calendar className="w-3 h-3" />
                            {service.status}
                          </Badge>
                        )}
                        {service.status === "Inscrições encerradas" && (
                          <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">
                            {service.status}
                          </Badge>
                        )}
                        <Badge variant="outline">
                          <MapPin className="w-3 h-3" />
                          {service.location}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex lg:flex-col gap-2 lg:justify-center">
                      <Button asChild className="bg-blue-600 hover:bg-blue-700">
                        <Link to={`/comunidade/servico/${service.id}`}>
                          Ver detalhes
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
