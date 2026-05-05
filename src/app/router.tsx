import { createBrowserRouter, Navigate } from "react-router-dom";
import { CommunityPortalPage } from "../modules/community/pages/CommunityPortalPage";
import { ServiceApplicationPage } from "../modules/community/pages/ServiceApplicationPage";
import { ServiceDetailsPage } from "../modules/community/pages/ServiceDetailsPage";
import { LandingPage } from "../modules/public/pages/LandingPage";
import { CommunicationPage } from "../modules/university/pages/CommunicationPage";
import { DashboardHomePage } from "../modules/university/pages/DashboardHomePage";
import { ReportsPage } from "../modules/university/pages/ReportsPage";
import { RequestsPage } from "../modules/university/pages/RequestsPage";
import { ScreeningsPage } from "../modules/university/pages/ScreeningsPage";
import { ServiceFormPage } from "../modules/university/pages/ServiceFormPage";
import { ServicesPage } from "../modules/university/pages/ServicesPage";
import { SettingsPage } from "../modules/university/pages/SettingsPage";
import { UniversityDashboardPage } from "../modules/university/pages/UniversityDashboardPage";
import { UniversityLoginPage } from "../modules/university/pages/UniversityLoginPage";
import { VacanciesPage } from "../modules/university/pages/VacanciesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/universidade/login",
    element: <UniversityLoginPage />,
  },
  {
    path: "/universidade",
    element: <UniversityDashboardPage />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <DashboardHomePage />,
      },
      {
        path: "servicos",
        element: <ServicesPage />,
      },
      {
        path: "servicos/novo",
        element: <ServiceFormPage />,
      },
      {
        path: "servicos/editar/:id",
        element: <ServiceFormPage />,
      },
      {
        path: "vagas",
        element: <VacanciesPage />,
      },
      {
        path: "solicitacoes",
        element: <RequestsPage />,
      },
      {
        path: "triagens",
        element: <ScreeningsPage />,
      },
      {
        path: "comunicacao",
        element: <CommunicationPage />,
      },
      {
        path: "relatorios",
        element: <ReportsPage />,
      },
      {
        path: "configuracoes",
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "/comunidade",
    element: <CommunityPortalPage />,
  },
  {
    path: "/comunidade/servico/:id",
    element: <ServiceDetailsPage />,
  },
  {
    path: "/comunidade/inscricao/:id",
    element: <ServiceApplicationPage />,
  },
]);

