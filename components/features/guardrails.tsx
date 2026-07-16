"use client"

import { useState } from "react"

import { Card } from "@/components/shared/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { DEFAULT_DAYS, TIME_LABELS } from "@/constants";
import CallingDays from "./callingDays";




function CallingWindow({
  value,
  onValueChange,
}: {
  value: number[]
  onValueChange: (value: number[]) => void
}) {
  return (
    <div className="flex w-full flex-col gap-6">
      <p className="font-inter text-sm font-semibold tracking-[-0.28px] text-zinc-800">
        Calling window
      </p>
      <div className="flex w-full flex-col gap-5">
        <div className="[&_[data-slot=slider-range]]:bg-zinc-800 [&_[data-slot=slider-thumb]]:size-3.5 [&_[data-slot=slider-thumb]]:border-zinc-800 [&_[data-slot=slider-track]]:bg-zinc-200">
          <Slider
            value={value}
            onValueChange={(nextValue) => {
              if (Array.isArray(nextValue)) {
                onValueChange(nextValue)
              }
            }}
            min={0}
            max={100}
            step={1}
          />
        </div>
        <div className="font-inter flex w-full items-center justify-between text-sm font-medium tracking-[-0.28px] text-zinc-500">
          {TIME_LABELS.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Guardrails() {
  const [selectedDays, setSelectedDays] = useState<Set<string>>(
    new Set(DEFAULT_DAYS)
  )
  const [windowRange, setWindowRange] = useState<number[]>([0, 100])

  const toggleDay = (day: string) => {
    setSelectedDays((previous) => {
      const next = new Set(previous)
      if (next.has(day)) {
        next.delete(day)
      } else {
        next.add(day)
      }
      return next
    })
  }

  return (
    <Card title="Guardrails" className="flex-1">
      <CallingDays selectedDays={selectedDays} onToggle={toggleDay} />
      <CallingWindow value={windowRange} onValueChange={setWindowRange} />
    </Card>
  )
}
