import {
  AlertRecord,
  MessageHistoryItem,
  MessageTemplate,
  Metric,
  RequestRecord,
  RoleProfile,
  ScreeningResponse,
  ScreeningTemplate,
  Service,
  UserRecord,
  VacancyRecord,
} from "../types";

export const institutionProfile = {
  name: "Uniponte Saúde",
  unit: "Clínica-escola UFPE",
  organizationName: "Universidade Federal de Pernambuco",
  department: "Clínica-escola de Psicologia",
  cnpj: "12.345.678/0001-90",
  phone: "(81) 3272-0000",
  address: "Av. Prof. Moraes Rego, 1235 - Cidade Universitária, Recife - PE",
  email: "clinica@ufpe.br",
};

export const dashboardMetrics: Metric[] = [
  { label: "Serviços ativos", value: "12", detail: "3 novos neste semestre" },
  { label: "Vagas abertas", value: "48", detail: "14 já reservadas" },
  { label: "Pessoas na fila", value: "236", detail: "Demanda concentrada em psicologia" },
  { label: "Triagens pendentes", value: "41", detail: "18 acima de 7 dias" },
];

export const demandByArea = [
  { label: "Psicologia", value: 84 },
  { label: "Odontologia", value: 65 },
  { label: "Fisioterapia", value: 52 },
  { label: "Nutrição", value: 48 },
  { label: "Fonoaudiologia", value: 31 },
];

export const managementAlerts: AlertRecord[] = [
  {
    title: "Psicologia adulto com fila elevada",
    description: "84 pessoas aguardam atendimento e 18 precisam de retorno rápido.",
    tone: "warning",
  },
  {
    title: "Odontologia ganhou capacidade de atendimento",
    description: "15 novas vagas foram liberadas após atualização da agenda acadêmica.",
    tone: "success",
  },
  {
    title: "Triagens antigas exigem revisão",
    description: "18 formulários estão sem análise há mais de sete dias.",
    tone: "danger",
  },
];

export const services: Service[] = [
  {
    id: 1,
    name: "Psicologia - Atendimento Adulto",
    area: "Psicologia",
    campus: "Campus Recife",
    modality: "Presencial",
    cost: "Gratuito",
    audience: "Adultos acima de 18 anos",
    address: "Av. Prof. Moraes Rego, 1235",
    vacancies: 20,
    status: "active",
    description: "Atendimento clínico com acompanhamento supervisionado por docentes.",
    responsible: "Ana Maria Silva",
  },
  {
    id: 2,
    name: "Odontologia - Triagem para restauração",
    area: "Odontologia",
    campus: "Campus Recife",
    modality: "Presencial",
    cost: "Taxa social",
    audience: "Jovens e adultos",
    address: "Bloco B - Clínica Odontológica",
    vacancies: 0,
    status: "waitlist",
    description: "Triagem inicial para procedimentos restauradores e encaminhamentos.",
    responsible: "Carlos Santos",
  },
  {
    id: 3,
    name: "Fisioterapia - Reabilitação musculoesquelética",
    area: "Fisioterapia",
    campus: "Campus Recife",
    modality: "Híbrido",
    cost: "Gratuito",
    audience: "Pacientes com dor crônica ou lesão muscular",
    address: "Laboratório de Fisioterapia",
    vacancies: 15,
    status: "active",
    description: "Programa supervisionado para reabilitação funcional e orientação domiciliar.",
    responsible: "Maria Oliveira",
  },
  {
    id: 4,
    name: "Nutrição - Avaliação nutricional social",
    area: "Nutrição",
    campus: "Campus Recife",
    modality: "Presencial",
    cost: "Gratuito",
    audience: "Famílias em vulnerabilidade alimentar",
    address: "Centro Integrado de Nutrição",
    vacancies: 0,
    status: "paused",
    description: "Avaliação clínica, hábitos alimentares e plano inicial de cuidado.",
    responsible: "João Pereira",
  },
];

export const recentRequests: RequestRecord[] = [
  {
    id: 1,
    personName: "Maria Silva",
    serviceName: "Psicologia Adulto",
    area: "Psicologia",
    date: "04/05/2026",
    district: "Boa Viagem",
    status: "new",
    screeningResult: "-",
  },
  {
    id: 2,
    personName: "João Santos",
    serviceName: "Odontologia",
    area: "Odontologia",
    date: "03/05/2026",
    district: "Recife",
    status: "approved",
    screeningResult: "Elegível",
  },
  {
    id: 3,
    personName: "Ana Costa",
    serviceName: "Fisioterapia",
    area: "Fisioterapia",
    date: "03/05/2026",
    district: "Casa Amarela",
    status: "under-review",
    screeningResult: "Em avaliação",
  },
  {
    id: 4,
    personName: "Pedro Lima",
    serviceName: "Nutrição",
    area: "Nutrição",
    date: "02/05/2026",
    district: "Espinheiro",
    status: "pending-screening",
    screeningResult: "-",
  },
  {
    id: 5,
    personName: "Carla Mendes",
    serviceName: "Psicologia Adulto",
    area: "Psicologia",
    date: "02/05/2026",
    district: "Boa Viagem",
    status: "waitlist",
    screeningResult: "Elegível",
  },
  {
    id: 6,
    personName: "Bruno Oliveira",
    serviceName: "Fisioterapia",
    area: "Fisioterapia",
    date: "01/05/2026",
    district: "Aflitos",
    status: "not-eligible",
    screeningResult: "Não elegível",
  },
  {
    id: 7,
    personName: "Julia Rodrigues",
    serviceName: "Odontologia",
    area: "Odontologia",
    date: "01/05/2026",
    district: "Graças",
    status: "served",
    screeningResult: "Elegível",
  },
];

export const vacancyRecords: VacancyRecord[] = [
  {
    serviceName: "Psicologia Adulto",
    openSlots: 20,
    enrolled: 84,
    pendingScreenings: 31,
    waitlist: 53,
    status: "open",
  },
  {
    serviceName: "Odontologia Limpeza",
    openSlots: 15,
    enrolled: 9,
    pendingScreenings: 4,
    waitlist: 0,
    status: "open",
  },
  {
    serviceName: "Fisioterapia Reabilitação",
    openSlots: 12,
    enrolled: 28,
    pendingScreenings: 12,
    waitlist: 16,
    status: "open",
  },
  {
    serviceName: "Nutrição Avaliação",
    openSlots: 0,
    enrolled: 48,
    pendingScreenings: 15,
    waitlist: 33,
    status: "paused",
  },
];

export const screeningTemplates: ScreeningTemplate[] = [
  { id: 1, name: "Triagem Psicologia Adulto", area: "Psicologia", responses: 84 },
  { id: 2, name: "Triagem Odontologia", area: "Odontologia", responses: 42 },
  { id: 3, name: "Triagem Nutrição", area: "Nutrição", responses: 38 },
  { id: 4, name: "Triagem Fisioterapia", area: "Fisioterapia", responses: 56 },
];

export const screeningResponses: ScreeningResponse[] = [
  {
    id: 1,
    personName: "Maria Silva",
    serviceName: "Psicologia",
    date: "04/05/2026",
    classification: "Prioritário",
    risk: "high",
  },
  {
    id: 2,
    personName: "João Santos",
    serviceName: "Odontologia",
    date: "03/05/2026",
    classification: "Normal",
    risk: "low",
  },
  {
    id: 3,
    personName: "Ana Costa",
    serviceName: "Fisioterapia",
    date: "03/05/2026",
    classification: "Normal",
    risk: "medium",
  },
  {
    id: 4,
    personName: "Pedro Lima",
    serviceName: "Nutrição",
    date: "02/05/2026",
    classification: "Prioritário",
    risk: "high",
  },
];

export const communicationTemplates: MessageTemplate[] = [
  {
    id: 1,
    title: "Sua triagem foi recebida",
    description: "Confirmação automática após o envio do formulário.",
  },
  {
    id: 2,
    title: "Você entrou na lista de espera",
    description: "Mensagem de acolhimento com previsão e próximos passos.",
  },
  {
    id: 3,
    title: "Há uma vaga disponível para você",
    description: "Convite para agendamento e confirmação de interesse.",
  },
  {
    id: 4,
    title: "As inscrições foram encerradas",
    description: "Comunicado de encerramento temporário do fluxo.",
  },
  {
    id: 5,
    title: "Seu perfil não se encaixa neste serviço",
    description: "Resposta cuidadosa com orientação para outro canal.",
  },
];

export const messageHistory: MessageHistoryItem[] = [
  {
    id: 1,
    recipient: "Maria Silva",
    subject: "Vaga disponível - Psicologia",
    date: "04/05/2026 14:30",
    status: "sent",
  },
  {
    id: 2,
    recipient: "João Santos",
    subject: "Triagem recebida",
    date: "03/05/2026 10:15",
    status: "sent",
  },
  {
    id: 3,
    recipient: "Ana Costa",
    subject: "Lista de espera",
    date: "02/05/2026 16:20",
    status: "sent",
  },
];

export const reportMetrics: Metric[] = [
  { label: "Pessoas atendidas", value: "1.248", detail: "+12% neste mês" },
  { label: "Taxa de ocupação", value: "68%", detail: "das vagas totais abertas" },
  { label: "Tempo médio de espera", value: "18 dias", detail: "+3 dias vs. mês anterior" },
  { label: "Taxa de desistência", value: "8,2%", detail: "-2 pontos neste mês" },
];

export const attendanceByArea = [
  { label: "Psicologia", value: 142 },
  { label: "Odontologia", value: 98 },
  { label: "Fisioterapia", value: 87 },
  { label: "Nutrição", value: 76 },
  { label: "Fonoaudiologia", value: 45 },
];

export const monthlyTrend = [
  { label: "Jan", value: 320 },
  { label: "Fev", value: 380 },
  { label: "Mar", value: 425 },
  { label: "Abr", value: 448 },
  { label: "Mai", value: 390 },
];

export const occupancyData = [
  { label: "Ocupadas", value: 68, color: "#0d6efd" },
  { label: "Disponíveis", value: 32, color: "#198754" },
];

export const regionalDemand = [
  { label: "Boa Viagem", value: 84 },
  { label: "Recife", value: 72 },
  { label: "Casa Amarela", value: 56 },
  { label: "Espinheiro", value: 48 },
  { label: "Aflitos", value: 38 },
];

export const topServices = [
  { rank: 1, service: "Psicologia Adulto", requests: 142, trend: "+15%" },
  { rank: 2, service: "Odontologia Limpeza", requests: 98, trend: "+8%" },
  { rank: 3, service: "Fisioterapia Reabilitação", requests: 87, trend: "+12%" },
  { rank: 4, service: "Nutrição Avaliação", requests: 76, trend: "+5%" },
  { rank: 5, service: "Fonoaudiologia", requests: 45, trend: "-2%" },
];

export const institutionUsers: UserRecord[] = [
  { id: 1, name: "Ana Maria Silva", email: "ana.silva@ufpe.br", role: "Administrador" },
  { id: 2, name: "Carlos Santos", email: "carlos.santos@ufpe.br", role: "Coordenação" },
  { id: 3, name: "Maria Oliveira", email: "maria.oliveira@ufpe.br", role: "Secretaria" },
  { id: 4, name: "João Pereira", email: "joao.pereira@ufpe.br", role: "Supervisor" },
];

export const roleProfiles: RoleProfile[] = [
  { role: "Administrador", description: "Acesso total ao sistema e às configurações." },
  { role: "Coordenação", description: "Gerenciamento de serviços, metas e relatórios." },
  { role: "Secretaria", description: "Gestão do funil, comunicação e agenda operacional." },
  { role: "Supervisor", description: "Acompanhamento de triagens e supervisão acadêmica." },
];

export const legalTerms = {
  termsOfUse:
    "Texto de consentimento apresentado a pacientes e responsáveis antes da solicitação de atendimento.",
  privacyPolicy:
    "Resumo da política de privacidade e uso responsável dos dados sociais e clínicos coletados.",
};

