"use client";

import { Card } from "@/components/shared/card";
import CallingDays from "./calling-days";
import { CallingWindow } from "./calling-window";
import { GuardrailsProps } from "@/types/campaign";

export default function Guardrails({
  selectedDays,
  onToggleDay,
  windowRange,
  onWindowRangeChange,
}: GuardrailsProps) {
  return (
    <Card title="Guardrails" contentClassName="gap-12">
      <CallingDays selectedDays={selectedDays} onToggle={onToggleDay} />
      <CallingWindow value={windowRange} onValueChange={onWindowRangeChange} />
    </Card>
  );
}
