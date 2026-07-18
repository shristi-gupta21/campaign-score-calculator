"use client";

import { Card } from "@/components/shared/card";
import { RedialCount } from "@/components/features/redial-count";
import { RedialInterval } from "@/components/features/redial-interval";
import type { RedialProps } from "@/types/campaign";

export default function Redial({
  redialCount,
  onRedialCountChange,
  redialInterval,
  onRedialIntervalChange,
}: RedialProps) {
  return (
    <Card title="Redial" contentClassName="gap-10">
      <RedialCount value={redialCount} onValueChange={onRedialCountChange} />
      <RedialInterval
        value={redialInterval}
        onValueChange={onRedialIntervalChange}
      />
    </Card>
  );
}
