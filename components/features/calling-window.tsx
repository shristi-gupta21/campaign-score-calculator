import {
  CALLING_WINDOW,
  CALLING_WINDOW_TIME_MARKERS,
  hourToSliderPercent,
  normalizeCallingWindow,
} from "@/lib/calling-window/mapping"
import { Slider } from "@/components/ui/slider"

export const CallingWindow = ({
  value,
  onValueChange,
}: {
  value: number[]
  onValueChange: (value: number[]) => void
}) => {
  return (
    <div className="flex w-full flex-col gap-[18px]">
      <p className="font-inter text-sm font-semibold tracking-[-0.28px] text-zinc-800">
        Calling window
      </p>
      <div className="flex w-full flex-col gap-2">
        <Slider
          value={value}
          onValueChange={(nextValue) => {
            if (Array.isArray(nextValue)) {
              onValueChange(normalizeCallingWindow([nextValue[0], nextValue[1]]))
            }
          }}
          min={CALLING_WINDOW.startHour}
          max={CALLING_WINDOW.endHour}
          step={1}
        />
        <div className="relative h-[18px] w-full">
          {CALLING_WINDOW_TIME_MARKERS.map(({ label, hour }) => {
            const percent = hourToSliderPercent(hour)
            const isFirst = hour === CALLING_WINDOW.startHour
            const isLast = hour === CALLING_WINDOW.endHour

            return (
              <span
                key={label}
                className="absolute font-inter text-sm font-medium leading-[18px] tracking-[-0.28px] text-zinc-500 text-nowrap"
                style={{
                  left: `${percent}%`,
                  transform: isFirst
                    ? "translateX(0)"
                    : isLast
                      ? "translateX(-100%)"
                      : "translateX(-50%)",
                }}
              >
                {label}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
