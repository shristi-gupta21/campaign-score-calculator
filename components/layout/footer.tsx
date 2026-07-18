"use client";

import { Button } from "@/components/ui/button";
import { useCampaignForm } from "@/components/providers/campaign-form-provider";

export default function Footer() {
  const { submittedPayload, submit } = useCampaignForm();

  return (
    <footer className="flex justify-between gap-4 border-t border-t-zinc-200 pt-6 mt-6">
      {submittedPayload && (
        <pre className="overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 font-mono text-sm text-foreground w-full">
          {JSON.stringify(submittedPayload, null, 2)}
        </pre>
      )}
      <div className="w-full flex justify-end">
        <Button type="button" onClick={submit}>
          Submit
        </Button>
      </div>
    </footer>
  );
}
