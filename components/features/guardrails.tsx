"use client"

import { useState } from "react"

import { Card } from "@/components/shared/card"
import { DEFAULT_DAYS } from "@/constants";
import CallingDays from "./calling-days";
import { CallingWindow } from "./calling-window";


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
