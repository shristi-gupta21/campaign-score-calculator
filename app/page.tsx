import Guardrails from "@/components/features/guardrails";
import Redial from "@/components/features/redial";

export default function Home() {
  return (
    <div className="flex w-full max-w-[560px] flex-col gap-10 py-10">
      <Guardrails />
      <Redial />
    </div>
  );
}
