import { REDIAL_COUNT_PENALTIES } from "@/lib/scoring/constants"
import { lookupPenalty } from "@/lib/scoring/lookup"

export function calculateRedialCountPenalty(redialCount: number): number {
  return lookupPenalty(REDIAL_COUNT_PENALTIES, redialCount, 0, 10)
}
