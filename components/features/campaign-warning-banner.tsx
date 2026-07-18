
import { CAMPAIGN_WARNING_MESSAGE } from "@/constants/campaign-warning"
import Image from "next/image";

const CampaignWarningBanner = () => {
  return (
    <div
      role="alert"
      className="flex items-start flex-col gap-2 p-6 bg-[#EFF6FF]"
    >
      <div className="flex items-center gap-1">
      <Image src='/star.svg' alt="Warning" width={18} height={18} />
      <span className="text-[#12367E] text-sm font-semibold tracking-[-0.28px]">Your settings are not optimized!</span>
   
      </div>
      <p className="font-inter text-sm font-medium tracking-[-0.28px] text-[#27272A]">
        {CAMPAIGN_WARNING_MESSAGE}
      </p>
    </div>
  )
}

export default CampaignWarningBanner
