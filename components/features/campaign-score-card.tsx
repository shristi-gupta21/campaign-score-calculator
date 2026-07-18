import Image from "next/image";

import type { CampaignScoreCardProps } from "@/types/campaign";
import { cn } from "@/lib/utils";
import { PENALTY_ROWS } from "@/constants";

const CampaignScoreCard = ({
  score,
  penalties,
  weatherLevel,
}: CampaignScoreCardProps) => {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <div className="relative w-full">
        <div className="absolute inset-x-0 top-[68px] flex flex-col items-center text-center">
          <span className="text-[64px] font-bold tracking-[-2.56px] text-white">
            {score}
          </span>
          <span className="-mt-4 text-sm font-medium tracking-[-0.28px] text-white">
            Campaign Score
          </span>
        </div>
        <Image
          src={`/level-${weatherLevel}.svg`}
          alt={`Campaign score level ${weatherLevel}`}
          width={558}
          height={472}
          className="h-auto w-full"
        />
      </div>
      <div className="flex flex-col gap-4 pt-4">
        {PENALTY_ROWS.map(({ key, label }) => (
          <div
            key={key}
            className="flex items-center justify-between border-b border-zinc-100 px-10 pb-4 text-sm font-semibold tracking-[-0.28px]"
          >
            <p className="text-zinc-500">{label}</p>
            <p
              className={cn(
                penalties[key] === 0 ? "text-emerald-600" : "text-red-500",
              )}
            >
              {penalties[key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignScoreCard;
