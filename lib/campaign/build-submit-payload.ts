import { DAYS } from "@/constants";
import type { CampaignInputs, CampaignSubmitPayload } from "@/types/campaign";

export function buildSubmitPayload(inputs: CampaignInputs): CampaignSubmitPayload {
  return {
    callingDays: DAYS.filter((day) => inputs.callingDays.has(day)),
    callingWindow: inputs.callingWindow,
    redialCount: inputs.redialCount,
    redialInterval: inputs.redialInterval,
  };
}
