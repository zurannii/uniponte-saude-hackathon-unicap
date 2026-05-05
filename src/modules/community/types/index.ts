export type CommunityServiceStatus = "open" | "waitlist" | "closed";
export type CommunityCostType = "free" | "social-fee";

export interface CommunityService {
  id: number;
  slug: string;
  name: string;
  university: string;
  area: string;
  costLabel: string;
  costType: CommunityCostType;
  status: CommunityServiceStatus;
  city: string;
  state: string;
  location: string;
  modality: string;
  shortDescription: string;
  description: string;
  audience: string;
  criteria: string[];
  exclusions: string[];
  documents: string[];
  schedule: string;
  vacanciesLabel: string;
}

export interface CommunityFilters {
  query: string;
  area: string;
  cost: string;
  availability: string;
}

