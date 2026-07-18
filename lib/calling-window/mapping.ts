export const CALLING_WINDOW = {
  startHour: 8,
  endHour: 21,
  totalHours: 13,
  sliderMin: 0,
  sliderMax: 100,
} as const

export const CALLING_WINDOW_TIME_MARKERS = [
  { label: "8 AM", position: 0 },
  { label: "11 AM", position: (3 / 13) * 100 },
  { label: "2 PM", position: (6 / 13) * 100 },
  { label: "5 PM", position: (9 / 13) * 100 },
  { label: "9 PM", position: 100 },
] as const

export function clampSliderPosition(position: number): number {
  return Math.max(
    CALLING_WINDOW.sliderMin,
    Math.min(CALLING_WINDOW.sliderMax, position)
  )
}

/** Maps slider position (0–100) to hour of day on a 24h clock. */
export function sliderPositionToHour(position: number): number {
  const clamped = clampSliderPosition(position)

  return (
    CALLING_WINDOW.startHour +
    (clamped / CALLING_WINDOW.sliderMax) * CALLING_WINDOW.totalHours
  )
}

/** Maps hour of day (8–21) back to slider position (0–100). */
export function hourToSliderPosition(hour: number): number {
  const clamped = Math.max(
    CALLING_WINDOW.startHour,
    Math.min(CALLING_WINDOW.endHour, hour)
  )

  return (
    ((clamped - CALLING_WINDOW.startHour) / CALLING_WINDOW.totalHours) *
    CALLING_WINDOW.sliderMax
  )
}

/** Converts a dual-handle slider range to calling hours (end − start). */
export function getCallingWindowHours(windowRange: [number, number]): number {
  const [start, end] = windowRange
  const startHour = sliderPositionToHour(start)
  const endHour = sliderPositionToHour(end)

  return Math.max(0, endHour - startHour)
}
