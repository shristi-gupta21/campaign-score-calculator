"use client";

import { calculateScore } from "@/lib/scoring/calculate-score";
import { useCampaignForm } from "@/components/providers/campaign-form-provider";
import CampaignScoreCard from "./campaign-score-card";
import Guardrails from "./guardrails";
import Redial from "./redial";

export default function CampaignCalculator() {
  const {
    inputs,
    onToggleDay,
    onWindowRangeChange,
    onRedialCountChange,
    onRedialIntervalChange,
  } = useCampaignForm();

  const { score, penalties, weatherLevel } = calculateScore(inputs);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <Guardrails
            callingDays={inputs.callingDays}
            onToggleDay={onToggleDay}
            callingWindow={inputs.callingWindow}
            onWindowRangeChange={onWindowRangeChange}
          />
          <Redial
            redialCount={inputs.redialCount}
            onRedialCountChange={onRedialCountChange}
            redialInterval={inputs.redialInterval}
            onRedialIntervalChange={onRedialIntervalChange}
          />
        </div>
        <CampaignScoreCard
          score={score}
          penalties={penalties}
          weatherLevel={weatherLevel}
        />
      </div>
    </div>
  );
}
