import { BadgeTone } from "../../../components/ui/Badge";
import { CommunityCostType, CommunityServiceStatus } from "../types";

export function getCommunityStatusMeta(status: CommunityServiceStatus): {
  label: string;
  tone: BadgeTone;
} {
  if (status === "open") {
    return { label: "Vagas abertas", tone: "success" };
  }

  if (status === "waitlist") {
    return { label: "Fila de espera", tone: "warning" };
  }

  return { label: "Inscrições encerradas", tone: "neutral" };
}

export function getCommunityCostMeta(costType: CommunityCostType): {
  tone: BadgeTone;
} {
  return costType === "free" ? { tone: "success" } : { tone: "warning" };
}

