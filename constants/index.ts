import { CALLING_WINDOW_TIME_MARKERS } from "@/lib/calling-window/mapping"
import { CampaignPenalties } from "@/types/campaign"

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const
const DEFAULT_DAYS = new Set<string>(["Mon", "Tue", "Wed", "Thu", "Fri"])
const TIME_LABELS = CALLING_WINDOW_TIME_MARKERS.map(({ label }) => label)
const REDIAL_COUNTS = [0, 2, 4, 6, 8, 10] as const
const REDIAL_INTERVALS = [
  { value: "3", label: "3 hours" },
  { value: "6", label: "6 hours" },
  { value: "9", label: "9 hours" },
  { value: "12", label: "12 hours" },
  { value: "24", label: "24 hours" },
] as const


const PENALTY_ROWS: {
  key: keyof CampaignPenalties
  label: string
}[] = [
  { key: "callingDays", label: "Calling days penalty" },
  { key: "callingWindow", label: "Calling window penalty" },
  { key: "redialCount", label: "Redial count penalty" },
  { key: "redialInterval", label: "Redial interval penalty" },
]

export {
  DAYS,
  DEFAULT_DAYS,
  REDIAL_COUNTS,
  REDIAL_INTERVALS,
  TIME_LABELS,
  PENALTY_ROWS,
}