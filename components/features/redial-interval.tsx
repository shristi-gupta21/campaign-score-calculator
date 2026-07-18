"use client"

import { REDIAL_INTERVALS } from "@/constants"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

export function RedialInterval({
  value,
  onValueChange,
}: {
  value: string
  onValueChange: (value: string) => void
}) {
  return (
    <div className="flex w-full flex-col gap-3">
      <p className="font-inter text-sm font-semibold tracking-[-0.28px] text-zinc-800">
        Redial interval
      </p>
      <RadioGroup
        value={value}
        onValueChange={onValueChange}
        className="flex w-full rounded-xl bg-zinc-100 p-0.5"
      >
        {REDIAL_INTERVALS.map((interval) => (
          <label
            key={interval.value}
            className="flex min-w-0 flex-1 cursor-pointer"
          >
            <RadioGroupItem value={interval.value} />
            <span
              className={cn(
                "font-inter flex h-10 w-full items-center justify-center rounded-lg border px-6 text-sm font-medium tracking-[-0.28px] text-zinc-800 text-nowrap",
                value === interval.value
                  ? "border-zinc-200 bg-white"
                  : "border-transparent bg-transparent"
              )}
            >
              {interval.label}
            </span>
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}
