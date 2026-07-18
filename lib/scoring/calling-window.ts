import {
  CALLING_WINDOW_PENALTIES,
  OPTIMAL,
} from "@/lib/scoring/constants"
import { lookupPenalty } from "@/lib/scoring/lookup"

export function getCallingWindowHours(windowRange: [number, number]): number {
  const [start, end] = windowRange
  const span = Math.max(0, end - start)

  return (span / 100) * OPTIMAL.callingWindowHours
}

export function calculateCallingWindowPenalty(
  windowRange: [number, number]
): number {
  const hours = Math.round(getCallingWindowHours(windowRange))

  return lookupPenalty(CALLING_WINDOW_PENALTIES, hours, 3, 13)
}
