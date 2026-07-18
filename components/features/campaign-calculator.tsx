"use client"

import { useCallback, useMemo, useState } from "react"

import CampaignScoreCard from "@/components/features/campaign-score-card"
import Guardrails from "@/components/features/guardrails"
import Redial from "@/components/features/redial"
import { DEFAULT_CAMPAIGN_INPUTS } from "@/constants/campaign-defaults"
import { calculateScore } from "@/lib/scoring"
import type { CampaignInputs, RedialIntervalValue } from "@/types/campaign"

export default function CampaignCalculator() {
  const [inputs, setInputs] = useState<CampaignInputs>(DEFAULT_CAMPAIGN_INPUTS)

  const toggleDay = useCallback((day: string) => {
    setInputs((previous) => {
      const nextDays = new Set(previous.selectedDays)
      if (nextDays.has(day)) {
        nextDays.delete(day)
      } else {
        nextDays.add(day)
      }
      return { ...previous, selectedDays: nextDays }
    })
  }, [])

  const setWindowRange = useCallback((windowRange: number[]) => {
    setInputs((previous) => ({
      ...previous,
      windowRange: [windowRange[0], windowRange[1]],
    }))
  }, [])

  const setRedialCount = useCallback((redialCount: number) => {
    setInputs((previous) => ({ ...previous, redialCount }))
  }, [])

  const setRedialInterval = useCallback((redialInterval: string) => {
    setInputs((previous) => ({
      ...previous,
      redialInterval: redialInterval as RedialIntervalValue,
    }))
  }, [])

  const scoreResult = useMemo(() => calculateScore(inputs), [inputs])

  return (
    <div className="flex w-full gap-24 py-10">
      <div className="flex w-full max-w-[560px] shrink-0 flex-col gap-10">
        <Guardrails
          selectedDays={inputs.selectedDays}
          onToggleDay={toggleDay}
          windowRange={inputs.windowRange}
          onWindowRangeChange={setWindowRange}
        />
        <Redial
          redialCount={inputs.redialCount}
          onRedialCountChange={setRedialCount}
          redialInterval={inputs.redialInterval}
          onRedialIntervalChange={setRedialInterval}
        />
      </div>
      <CampaignScoreCard
        score={scoreResult.score}
        penalties={scoreResult.penalties}
        weatherLevel={scoreResult.weatherLevel}
      />
    </div>
  )
}
