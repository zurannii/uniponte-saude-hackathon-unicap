import { communityServices } from "../data/mockCommunityData";
import { CommunityFilters } from "../types";

const defaultFilters: CommunityFilters = {
  query: "",
  area: "all",
  cost: "all",
  availability: "all",
};

export const communityService = {
  getFilters() {
    return defaultFilters;
  },
  getAreas() {
    return ["Psicologia", "Odontologia", "Fisioterapia", "Nutrição", "Fonoaudiologia"];
  },
  getServices(filters: CommunityFilters = defaultFilters) {
    return communityServices.filter((service) => {
      const normalizedQuery = filters.query.trim().toLowerCase();
      const matchesQuery =
        normalizedQuery.length === 0 ||
        service.name.toLowerCase().includes(normalizedQuery) ||
        service.area.toLowerCase().includes(normalizedQuery) ||
        service.university.toLowerCase().includes(normalizedQuery);

      const matchesArea = filters.area === "all" || service.area === filters.area;
      const matchesCost =
        filters.cost === "all" ||
        (filters.cost === "free" && service.costType === "free") ||
        (filters.cost === "social-fee" && service.costType === "social-fee");
      const matchesAvailability =
        filters.availability === "all" ||
        (filters.availability === "open" && service.status === "open");

      return matchesQuery && matchesArea && matchesCost && matchesAvailability;
    });
  },
  getServiceById(id: number) {
    return communityServices.find((service) => service.id === id) ?? null;
  },
};

