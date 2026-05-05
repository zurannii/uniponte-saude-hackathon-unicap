import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  description: string;
  path: string;
  icon: LucideIcon;
}

export interface Metric {
  label: string;
  value: string;
  detail?: string;
}

export type ServiceStatus = "active" | "paused" | "waitlist" | "closed";
export type RequestStatus =
  | "new"
  | "pending-screening"
  | "under-review"
  | "approved"
  | "waitlist"
  | "not-eligible"
  | "served";
export type VacancyStatus = "open" | "paused";
export type RiskLevel = "high" | "medium" | "low";

export interface Service {
  id: number;
  name: string;
  area: string;
  campus: string;
  modality: string;
  cost: string;
  audience: string;
  address: string;
  vacancies: number;
  status: ServiceStatus;
  description: string;
  responsible: string;
}

export interface RequestRecord {
  id: number;
  personName: string;
  serviceName: string;
  area: string;
  date: string;
  district: string;
  status: RequestStatus;
  screeningResult: string;
}

export interface VacancyRecord {
  serviceName: string;
  openSlots: number;
  enrolled: number;
  pendingScreenings: number;
  waitlist: number;
  status: VacancyStatus;
}

export interface AlertRecord {
  title: string;
  description: string;
  tone: "warning" | "success" | "danger";
}

export interface ScreeningTemplate {
  id: number;
  name: string;
  area: string;
  responses: number;
}

export interface ScreeningResponse {
  id: number;
  personName: string;
  serviceName: string;
  date: string;
  classification: string;
  risk: RiskLevel;
}

export interface MessageTemplate {
  id: number;
  title: string;
  description: string;
}

export interface MessageHistoryItem {
  id: number;
  recipient: string;
  subject: string;
  date: string;
  status: "sent";
}

export interface UserRecord {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface RoleProfile {
  role: string;
  description: string;
}

export interface ServiceFormValues {
  name: string;
  area: string;
  description: string;
  campus: string;
  address: string;
  modality: string;
  cost: string;
  audience: string;
  vacancies: string;
  status: ServiceStatus;
  responsible: string;
}

