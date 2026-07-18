import { TIME_LABELS } from "@/constants"
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
              onValueChange(nextValue)
            }
          }}
          min={0}
          max={100}
          step={1}
        />
        <div className="font-inter flex w-full items-center justify-between text-sm font-medium leading-[18px] tracking-[-0.28px] text-zinc-500">
          {TIME_LABELS.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
