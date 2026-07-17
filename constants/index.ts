const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const
const DEFAULT_DAYS = new Set<string>(["Mon", "Tue", "Wed", "Thu", "Fri"])
const TIME_LABELS = ["8 AM", "11 AM", "2 PM", "5 PM", "9 PM"]
const REDIAL_COUNTS = [0, 2, 4, 6, 8, 10] as const
const REDIAL_INTERVALS = [
  { value: "3", label: "3 hours" },
  { value: "6", label: "6 hours" },
  { value: "9", label: "9 hours" },
  { value: "12", label: "12 hours" },
  { value: "24", label: "24 hours" },
] as const

export {
  DAYS,
  DEFAULT_DAYS,
  REDIAL_COUNTS,
  REDIAL_INTERVALS,
  TIME_LABELS,
}