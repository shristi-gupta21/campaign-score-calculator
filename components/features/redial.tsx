"use client"

import { useState } from "react"

import { Card } from "@/components/shared/card"
import { RedialCount } from "@/components/features/redial-count"
import { RedialInterval } from "@/components/features/redial-interval"

export default function Redial() {
  const [redialCount, setRedialCount] = useState(4)
  const [redialInterval, setRedialInterval] = useState("3")

  return (
    <Card title="Redial" contentClassName="gap-10">
      <RedialCount value={redialCount} onValueChange={setRedialCount} />
      <RedialInterval value={redialInterval} onValueChange={setRedialInterval} />
    </Card>
  )
}
