import { TIME_LABELS } from "@/constants";
import { Slider } from "../ui/slider";

export const CallingWindow =    ({
    value,
    onValueChange,
  }: {
    value: number[]
    onValueChange: (value: number[]) => void
  }) => {
    return (
      <div className="flex w-full flex-col gap-6">
        <p className="font-inter text-sm font-semibold tracking-[-0.28px] text-zinc-800">
          Calling window
        </p>
        <div className="flex w-full flex-col gap-5">
          <div className="[&_[data-slot=slider-range]]:bg-zinc-800 [&_[data-slot=slider-thumb]]:border-zinc-800 [&_[data-slot=slider-track]]:bg-zinc-200">
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
  