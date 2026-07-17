import { cn } from "@/lib/utils"

type CardProps = {
  title: string
  children: React.ReactNode
  className?: string
  contentClassName?: string
}

export function Card({
  title,
  children,
  className,
  contentClassName,
}: CardProps) {
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
      <div
        className={cn(
          "flex w-full flex-col rounded-2xl border border-zinc-200 bg-white p-6",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  )
}
