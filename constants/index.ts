const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const
const DEFAULT_DAYS = new Set<string>(["Mon", "Tue", "Wed", "Thu", "Fri"])
const TIME_LABELS = ["8 AM", "11 AM", "2 PM", "5 PM", "9 PM"]
export { DAYS, DEFAULT_DAYS, TIME_LABELS }