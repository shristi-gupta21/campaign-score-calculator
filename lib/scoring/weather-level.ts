import { WEATHER_THRESHOLDS } from "@/lib/scoring/constants"
import type { WeatherLevel } from "@/types/campaign"

export function getWeatherLevel(score: number): WeatherLevel {
  if (score >= WEATHER_THRESHOLDS.level1) {
    return 1
  }

  if (score >= WEATHER_THRESHOLDS.level2) {
    return 2
  }

  if (score >= WEATHER_THRESHOLDS.level3) {
    return 3
  }

  return 4
}
