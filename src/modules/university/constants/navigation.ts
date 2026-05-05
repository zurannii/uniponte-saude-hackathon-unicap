import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Stethoscope,
  Users,
} from "lucide-react";
import { NavItem } from "../types";

export const universityNavigation: NavItem[] = [
  {
    label: "Início",
    description: "Visão geral da operação acadêmica e social",
    path: "/universidade/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Serviços",
    description: "Cadastro e manutenção dos atendimentos oferecidos",
    path: "/universidade/servicos",
    icon: Stethoscope,
  },
  {
    label: "Vagas",
    description: "Controle de oferta, ocupação e lista de espera",
    path: "/universidade/vagas",
    icon: CalendarDays,
  },
  {
    label: "Solicitações",
    description: "Entrada de pessoas interessadas e fluxo da fila",
    path: "/universidade/solicitacoes",
    icon: Users,
  },
  {
    label: "Triagens",
    description: "Formulários, respostas e priorização de casos",
    path: "/universidade/triagens",
    icon: ClipboardList,
  },
  {
    label: "Comunicação",
    description: "Mensagens automáticas e comunicados direcionados",
    path: "/universidade/comunicacao",
    icon: MessageSquare,
  },
  {
    label: "Relatórios",
    description: "Indicadores operacionais e impacto social",
    path: "/universidade/relatorios",
    icon: BarChart3,
  },
  {
    label: "Configurações",
    description: "Instituição, usuários, branding e termos",
    path: "/universidade/configuracoes",
    icon: Settings,
  },
];

