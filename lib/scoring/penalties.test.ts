import { describe, expect, it } from "vitest"

import { DEFAULT_CAMPAIGN_INPUTS } from "@/constants/campaign-defaults"
import { calculateCallingDaysPenalty } from "@/lib/scoring/calling-days"
import {
  calculateCallingWindowPenalty,
  getCallingWindowHours,
} from "@/lib/scoring/calling-window"
import { calculateScore } from "@/lib/scoring/calculate-score"
import {
  CALLING_DAYS_PENALTIES,
  CALLING_WINDOW_PENALTIES,
  REDIAL_COUNT_PENALTIES,
  REDIAL_INTERVAL_PENALTIES,
} from "@/lib/scoring/constants"
import { calculateRedialCountPenalty } from "@/lib/scoring/redial-count"
import { calculateRedialIntervalPenalty } from "@/lib/scoring/redial-interval"
import { getWeatherLevel } from "@/lib/scoring/weather-level"
import type { RedialIntervalValue } from "@/types/campaign"

describe("redial count penalties", () => {
  it.each(Object.entries(REDIAL_COUNT_PENALTIES))(
    "count %i → penalty %i",
    (count, penalty) => {
      expect(calculateRedialCountPenalty(Number(count))).toBe(penalty)
    }
  )
})

describe("redial interval penalties", () => {
  it.each(Object.entries(REDIAL_INTERVAL_PENALTIES))(
    "interval %sh → penalty %i",
    (interval, penalty) => {
      expect(
        calculateRedialIntervalPenalty(interval as RedialIntervalValue)
      ).toBe(penalty)
    }
  )
})

describe("calling days penalties", () => {
  it.each(Object.entries(CALLING_DAYS_PENALTIES))(
    "%i days → penalty %i",
    (days, penalty) => {
      const selectedDays = new Set(
        ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].slice(0, Number(days))
      )

      expect(calculateCallingDaysPenalty(selectedDays)).toBe(penalty)
    }
  )

  it("clamps 0 selected days to 1-day penalty", () => {
    expect(calculateCallingDaysPenalty(new Set())).toBe(-40)
  })
})

describe("calling window penalties", () => {
  it("maps full range to 13 hours with no penalty", () => {
    expect(getCallingWindowHours([0, 100])).toBe(13)
    expect(calculateCallingWindowPenalty([0, 100])).toBe(0)
  })

  it.each(Object.entries(CALLING_WINDOW_PENALTIES))(
    "%i hours → penalty %i",
    (hours, penalty) => {
      const span = (Number(hours) / 13) * 100

      expect(calculateCallingWindowPenalty([0, span])).toBe(penalty)
    }
  )
})

describe("weather levels", () => {
  it.each([
    [100, 1],
    [82, 1],
    [81, 2],
    [62, 2],
    [61, 3],
    [42, 3],
    [41, 4],
    [0, 4],
  ] as const)("score %i → level %i", (score, level) => {
    expect(getWeatherLevel(score)).toBe(level)
  })
})

describe("calculateScore", () => {
  it("returns 100 at optimal settings", () => {
    expect(calculateScore(DEFAULT_CAMPAIGN_INPUTS)).toEqual({
      score: 100,
      penalties: {
        callingDays: 0,
        callingWindow: 0,
        redialCount: 0,
        redialInterval: 0,
      },
      weatherLevel: 1,
    })
  })

  it("floors score at 0", () => {
    const result = calculateScore({
      selectedDays: new Set(["Mon"]),
      windowRange: [0, (3 / 13) * 100],
      redialCount: 0,
      redialInterval: "24",
    })

    expect(result.score).toBe(0)
    expect(result.penalties.callingDays).toBe(-40)
    expect(result.penalties.callingWindow).toBe(-33)
    expect(result.penalties.redialCount).toBe(-100)
    expect(result.penalties.redialInterval).toBe(-34)
  })

  it("updates score when a single input deviates", () => {
    const result = calculateScore({
      ...DEFAULT_CAMPAIGN_INPUTS,
      redialCount: 4,
    })

    expect(result.penalties.redialCount).toBe(-13)
    expect(result.score).toBe(87)
    expect(result.weatherLevel).toBe(1)
  })
})
