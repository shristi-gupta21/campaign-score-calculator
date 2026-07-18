import { calculateCallingDaysPenalty } from "@/lib/scoring/calling-days"
import { calculateCallingWindowPenalty } from "@/lib/scoring/calling-window"
import { calculateRedialCountPenalty } from "@/lib/scoring/redial-count"
import { calculateRedialIntervalPenalty } from "@/lib/scoring/redial-interval"
import { getWeatherLevel } from "@/lib/scoring/weather-level"
import type { CampaignInputs, CampaignScoreResult } from "@/types/campaign"

export function calculateScore(inputs: CampaignInputs): CampaignScoreResult {
  const penalties = {
    callingDays: calculateCallingDaysPenalty(inputs.callingDays),
    callingWindow: calculateCallingWindowPenalty(inputs.callingWindow),
    redialCount: calculateRedialCountPenalty(inputs.redialCount),
    redialInterval: calculateRedialIntervalPenalty(inputs.redialInterval),
  }

  const rawScore =
    100 +
    penalties.callingDays +
    penalties.callingWindow +
    penalties.redialCount +
    penalties.redialInterval

  const score = Math.max(0, rawScore)
  const weatherLevel = getWeatherLevel(score)

  return { score, penalties, weatherLevel }
}
