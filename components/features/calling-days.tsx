import { DAYS } from "@/constants"
import { cn } from "@/lib/utils"

const CallingDays = ({
  callingDays,
  onToggle,
}: {
  callingDays: Set<string>
  onToggle: (day: string) => void
}) => {
  return (
    <div className="flex w-full flex-col gap-3">
      <p className="font-inter text-sm font-semibold tracking-[-0.28px] text-zinc-800">
        Calling days
      </p>
      <div className="flex w-full gap-2">
        {DAYS.map((day) => {
          const isSelected = callingDays.has(day)

          return (
            <button
              key={day}
              type="button"
              onClick={() => onToggle(day)}
              className={cn(
                "font-inter flex h-10 min-w-0 flex-1 items-center justify-center rounded-lg border border-zinc-200 px-6 text-sm font-medium tracking-[-0.28px] transition-colors",
                isSelected
                  ? "bg-zinc-800 text-white"
                  : "bg-white text-zinc-800 hover:bg-zinc-50"
              )}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CallingDays
