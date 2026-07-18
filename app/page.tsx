import CampaignScoreCard from "@/components/features/campaign-score-card";
import Guardrails from "@/components/features/guardrails";
import Redial from "@/components/features/redial";

export default function Home() {
  return (
   <div className="flex w-full gap-24 py-10">
     <div className="flex w-full max-w-[560px] shrink-0 flex-col gap-10">
      <Guardrails />
      <Redial />
    </div>
    <CampaignScoreCard/>
   </div>
  );
}
