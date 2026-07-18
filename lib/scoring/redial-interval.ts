import { REDIAL_INTERVAL_PENALTIES } from "@/lib/scoring/constants"
import type { RedialIntervalValue } from "@/types/campaign"

export function calculateRedialIntervalPenalty(
  redialInterval: RedialIntervalValue
): number {
  return REDIAL_INTERVAL_PENALTIES[redialInterval]
}
