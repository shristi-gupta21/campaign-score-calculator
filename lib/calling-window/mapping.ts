export const CALLING_WINDOW = {
  startHour: 8,
  endHour: 21,
  totalHours: 13,
} as const

export const CALLING_WINDOW_TIME_MARKERS = [
  { label: "8 AM", hour: 8 },
  { label: "11 AM", hour: 11 },
  { label: "2 PM", hour: 14 },
  { label: "5 PM", hour: 17 },
  { label: "9 PM", hour: 21 },
] as const

export function clampCallingWindowHour(hour: number): number {
  return Math.max(
    CALLING_WINDOW.startHour,
    Math.min(CALLING_WINDOW.endHour, Math.round(hour)),
  )
}

/** Maps an hour (8–21) to its percentage along the slider track. */
export function hourToSliderPercent(hour: number): number {
  const clamped = clampCallingWindowHour(hour)

  return (
    ((clamped - CALLING_WINDOW.startHour) / CALLING_WINDOW.totalHours) * 100
  )
}

export function normalizeCallingWindow(
  windowRange: [number, number],
): [number, number] {
  const startHour = clampCallingWindowHour(windowRange[0])
  const endHour = clampCallingWindowHour(windowRange[1])

  return [startHour, Math.max(startHour, endHour)]
}

/** Returns calling hours (end hour − start hour) for a discrete hour range. */
export function getCallingWindowHours(windowRange: [number, number]): number {
  const [start, end] = normalizeCallingWindow(windowRange)

  return end - start
}
