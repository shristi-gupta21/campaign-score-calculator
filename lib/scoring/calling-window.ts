import { getCallingWindowHours } from "@/lib/calling-window/mapping"
import { CALLING_WINDOW_PENALTIES } from "@/lib/scoring/constants"
import { lookupPenalty } from "@/lib/scoring/lookup"

export { getCallingWindowHours } from "@/lib/calling-window/mapping"

export function calculateCallingWindowPenalty(
  windowRange: [number, number]
): number {
  const hours = Math.round(getCallingWindowHours(windowRange))

  return lookupPenalty(CALLING_WINDOW_PENALTIES, hours, 3, 13)
}
