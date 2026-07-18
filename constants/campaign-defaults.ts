import { DEFAULT_DAYS } from "@/constants"
import type { CampaignInputs } from "@/types/campaign"

export const DEFAULT_CAMPAIGN_INPUTS: CampaignInputs = {
  selectedDays: new Set(DEFAULT_DAYS),
  windowRange: [0, 100],
  redialCount: 5,
  redialInterval: "3",
}
