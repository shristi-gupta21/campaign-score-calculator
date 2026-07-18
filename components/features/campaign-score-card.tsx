import Image from "next/image";
import React from "react";

const scores = [
  "Calling days panelty",
  "Calling window panelty",
  "Redial count penalty",
  "Redial interval penalty",
];

const CampaignScoreCard = () => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white overflow-hidden">
      <div className="relative w-full">
        <div className="absolute inset-x-0 top-[68px] flex flex-col items-center text-center">
          <span className="text-[64px] font-bold tracking-[-2.56px] text-white">
            100
          </span>
          <span className="text-sm font-medium tracking-[-0.28px] text-white -mt-4">
            Campaign Score
          </span>
        </div>
        <Image
          src="/level-1.svg"
          alt="level-1"
          width={558}
          height={472}
          className="h-auto w-full"
        />
      </div>
      <div className="flex flex-col gap-4 pt-4">
        {scores.map((score) => (
          <div
            key={score}
            className="flex px-10 justify-between items-center border-b border-zinc-100 pb-4 text-sm font-semibold tracking-[-0.28px]"
          >
            <p className="text-zinc-500 ">{score}</p>
            <p className="text-emerald-600 ">0</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignScoreCard;
