import {
  attendanceByArea,
  communicationTemplates,
  dashboardMetrics,
  demandByArea,
  institutionProfile,
  institutionUsers,
  legalTerms,
  managementAlerts,
  messageHistory,
  monthlyTrend,
  occupancyData,
  recentRequests,
  regionalDemand,
  reportMetrics,
  roleProfiles,
  screeningResponses,
  screeningTemplates,
  services,
  topServices,
  vacancyRecords,
} from "../data/mockUniversityData";
import { ServiceFormValues } from "../types";

const areas = [
  "Psicologia",
  "Odontologia",
  "Fisioterapia",
  "Nutrição",
  "Fonoaudiologia",
  "Enfermagem",
];

const modalities = ["Presencial", "Remoto", "Híbrido"];
const costs = ["Gratuito", "Taxa social"];

export const universityService = {
  getInstitutionProfile() {
    return institutionProfile;
  },
  getDashboardOverview() {
    return {
      metrics: dashboardMetrics,
      demandByArea,
      alerts: managementAlerts,
      recentRequests: recentRequests.slice(0, 4),
    };
  },
  getServices() {
    return services;
  },
  getServiceById(id: number) {
    return services.find((service) => service.id === id) ?? null;
  },
  getServiceFormOptions() {
    return {
      areas,
      modalities,
      costs,
    };
  },
  saveService(values: ServiceFormValues) {
    return {
      ...values,
      id: Date.now(),
    };
  },
  getVacancyRecords() {
    return vacancyRecords;
  },
  getRequests() {
    return recentRequests;
  },
  getScreenings() {
    return {
      templates: screeningTemplates,
      responses: screeningResponses,
    };
  },
  getCommunicationCenter() {
    return {
      templates: communicationTemplates,
      history: messageHistory,
    };
  },
  getReportsOverview() {
    return {
      metrics: reportMetrics,
      attendanceByArea,
      monthlyTrend,
      occupancyData,
      regionalDemand,
      topServices,
    };
  },
  getSettingsOverview() {
    return {
      institution: institutionProfile,
      users: institutionUsers,
      profiles: roleProfiles,
      legalTerms,
    };
  },
};

