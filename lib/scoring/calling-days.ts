import { CALLING_DAYS_PENALTIES } from "@/lib/scoring/constants"
import { lookupPenalty } from "@/lib/scoring/lookup"

export function calculateCallingDaysPenalty(selectedDays: Set<string>): number {
  const dayCount = selectedDays.size

  return lookupPenalty(CALLING_DAYS_PENALTIES, dayCount, 1, 7)
}
