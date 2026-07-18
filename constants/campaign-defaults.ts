import { DEFAULT_DAYS } from "@/constants"
import type { CampaignInputs } from "@/types/campaign"

export const DEFAULT_CAMPAIGN_INPUTS: CampaignInputs = {
  selectedDays: new Set(DEFAULT_DAYS),
  windowRange: [0, 100],
  redialCount: 5,
  redialInterval: "3",
}

export const DEFAULT_CAMPAIGN_SCORE = {
  score: 100,
  penalties: {
    callingDays: 0,
    callingWindow: 0,
    redialCount: 0,
    redialInterval: 0,
  },
  weatherLevel: 1 as const,
}
