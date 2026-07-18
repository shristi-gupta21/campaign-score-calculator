import type { CampaignScoreCardProps } from "@/types/campaign";
import CampaignWarningBanner from "@/components/features/campaign-warning-banner";
import WeatherScene from "@/components/features/weather-scene";
import { cn } from "@/lib/utils";
import { PENALTY_ROWS } from "@/constants";

const CampaignScoreCard = ({
  score,
  penalties,
  weatherLevel,
}: CampaignScoreCardProps) => {
  return (
    <div className={cn("flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white", weatherLevel >= 3 ? "gap-0" : "gap-4")}>
      <div className="relative w-full">
        <WeatherScene weatherLevel={weatherLevel} />
        <div className="pointer-events-none absolute inset-x-0 top-[18.7%] z-10 flex flex-col items-center text-center">
          <span className="text-[64px] font-bold tracking-[-2.56px] text-white">
            {score.toFixed(0)}
          </span>
          <span className="-mt-4 text-sm font-medium tracking-[-0.28px] text-white">
            Campaign Score
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        {weatherLevel >= 3 ? (
          <div className="">
            <CampaignWarningBanner />
          </div>
        ) : null}
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
              {penalties[key]?.toFixed(0)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignScoreCard;
