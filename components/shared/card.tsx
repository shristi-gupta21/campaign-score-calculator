import { cn } from "@/lib/utils"

type CardProps = {
  title: string
  children: React.ReactNode
  className?: string
}

export function Card({ title, children, className }: CardProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-2xl bg-zinc-100",
        className
      )}
    >
      <div className="px-6 py-2.5">
        <p className="font-inter text-sm font-semibold tracking-[-0.28px] text-zinc-800">
          {title}
        </p>
      </div>
      <div className="flex w-full flex-col gap-12 rounded-2xl border border-zinc-200 bg-white p-6">
        {children}
      </div>
    </div>
  )
}
