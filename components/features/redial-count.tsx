"use client"

import { REDIAL_COUNTS } from "@/constants"
import { Slider } from "@/components/ui/slider"

const REDIAL_COUNT_MIN = 0
const REDIAL_COUNT_MAX = 10

function redialCountToSliderPercent(count: number): number {
  return (count / REDIAL_COUNT_MAX) * 100
}

export function RedialCount({
  value,
  onValueChange,
}: {
  value: number
  onValueChange: (value: number) => void
}) {
  return (
    <div className="flex w-full flex-col gap-[18px]">
      <p className="font-inter text-sm font-semibold tracking-[-0.28px] text-zinc-800">
        Redial count
      </p>
      <div className="flex w-full flex-col gap-2">
        <Slider
          value={[value]}
          onValueChange={(nextValue) => {
            const next = Array.isArray(nextValue) ? nextValue[0] : nextValue
            if (typeof next === "number") {
              onValueChange(next)
            }
          }}
          min={REDIAL_COUNT_MIN}
          max={REDIAL_COUNT_MAX}
          step={1}
        />
        <div className="relative h-[18px] w-full">
          {REDIAL_COUNTS.map((count) => {
            const percent = redialCountToSliderPercent(count)
            const isFirst = count === REDIAL_COUNT_MIN
            const isLast = count === REDIAL_COUNT_MAX

            return (
              <span
                key={count}
                className="absolute font-inter text-sm font-medium leading-[18px] tracking-[-0.28px] text-zinc-500"
                style={{
                  left: `${percent}%`,
                  transform: isFirst
                    ? "translateX(0)"
                    : isLast
                      ? "translateX(-100%)"
                      : "translateX(-50%)",
                }}
              >
                {count}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
