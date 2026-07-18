import { CALLING_WINDOW } from "@/lib/calling-window/mapping"
import type { RedialIntervalValue } from "@/types/campaign"

export const OPTIMAL = {
  weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri"] as const,
  windowRange: [8, 21] as [number, number],
  callingWindowHours: CALLING_WINDOW.totalHours,
  redialCount: 5,
  redialInterval: "3" as RedialIntervalValue,
  selectedDayCount: 5,
}

export const REDIAL_COUNT_PENALTIES: Record<number, number> = {
  0: -100,
  1: -90,
  2: -55,
  3: -31,
  4: -13,
  5: 0,
  6: 0,
  7: 0,
  8: -19,
  9: -43,
  10: -76,
}

export const REDIAL_INTERVAL_PENALTIES: Record<RedialIntervalValue, number> = {
  "3": 0,
  "6": 0,
  "9": -12,
  "12": -22,
  "24": -34,
}

export const CALLING_DAYS_PENALTIES: Record<number, number> = {
  1: -40,
  2: -30,
  3: -20,
  4: -10,
  5: 0,
  6: 0,
  7: 0,
}

export const CALLING_WINDOW_PENALTIES: Record<number, number> = {
  3: -33,
  4: -26,
  5: -20,
  6: -13,
  7: -7,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 0,
}

export const WEATHER_THRESHOLDS = {
  level1: 82,
  level2: 62,
  level3: 42,
} as const
