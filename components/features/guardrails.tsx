"use client";

import { Card } from "@/components/shared/card";
import CallingDays from "./calling-days";
import { CallingWindow } from "./calling-window";
import { GuardrailsProps } from "@/types/campaign";

export default function Guardrails({
  callingDays,
  onToggleDay,
  callingWindow,
  onWindowRangeChange,
}: GuardrailsProps) {
  return (
    <Card title="Guardrails" contentClassName="gap-12">
      <CallingDays callingDays={callingDays} onToggle={onToggleDay} />
      <CallingWindow value={callingWindow} onValueChange={onWindowRangeChange} />
    </Card>
  );
}
