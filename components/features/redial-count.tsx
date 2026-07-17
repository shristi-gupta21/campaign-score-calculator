"use client"

import { REDIAL_COUNTS } from "@/constants"
import { Slider } from "@/components/ui/slider"

export function RedialCount({
  value,
  onValueChange,
}: {
  value: number
  onValueChange: (value: number) => void
}) {
  return (
    <div className="flex w-full flex-col gap-6">
      <p className="font-inter text-sm font-semibold tracking-[-0.28px] text-zinc-800">
        Redial count
      </p>
      <div className="flex w-full flex-col gap-5">
        <Slider
          value={[value]}
          onValueChange={(nextValue) => {
            const next = Array.isArray(nextValue) ? nextValue[0] : nextValue
            if (typeof next === "number") {
              onValueChange(next)
            }
          }}
          min={0}
          max={10}
          step={2}
        />
        <div className="font-inter flex w-full items-center justify-between text-sm font-medium leading-[18px] tracking-[-0.28px] text-zinc-500">
          {REDIAL_COUNTS.map((count) => (
            <span key={count}>{count}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
