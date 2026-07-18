"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { DEFAULT_CAMPAIGN_INPUTS } from "@/constants/campaign-defaults";
import { buildSubmitPayload } from "@/lib/campaign/build-submit-payload";
import type {
  CampaignInputs,
  CampaignSubmitPayload,
  RedialIntervalValue,
} from "@/types/campaign";

type CampaignFormContextValue = {
  inputs: CampaignInputs;
  submittedPayload: CampaignSubmitPayload | null;
  onToggleDay: (day: string) => void;
  onWindowRangeChange: (range: number[]) => void;
  onRedialCountChange: (count: number) => void;
  onRedialIntervalChange: (interval: string) => void;
  submit: () => void;
};

const CampaignFormContext = createContext<CampaignFormContextValue | null>(null);

export function CampaignFormProvider({ children }: { children: ReactNode }) {
  const [inputs, setInputs] = useState<CampaignInputs>(DEFAULT_CAMPAIGN_INPUTS);
  const [submittedPayload, setSubmittedPayload] = useState<CampaignSubmitPayload | null>(
    null,
  );

  const onToggleDay = useCallback((day: string) => {
    setInputs((previous) => {
      const nextDays = new Set(previous.callingDays);
      if (nextDays.has(day)) {
        nextDays.delete(day);
      } else {
        nextDays.add(day);
      }
      return { ...previous, callingDays: nextDays };
    });
  }, []);

  const onWindowRangeChange = useCallback((windowRange: number[]) => {
    setInputs((previous) => ({
      ...previous,
      callingWindow: [windowRange[0], windowRange[1]],
    }));
  }, []);

  const onRedialCountChange = useCallback((count: number) => {
    setInputs((previous) => ({ ...previous, redialCount: count }));
  }, []);

  const onRedialIntervalChange = useCallback((interval: string) => {
    setInputs((previous) => ({
      ...previous,
      redialInterval: interval as RedialIntervalValue,
    }));
  }, []);

  const submit = useCallback(() => {
    setSubmittedPayload(buildSubmitPayload(inputs));
  }, [inputs]);

  const value = useMemo(
    () => ({
      inputs,
      submittedPayload,
      onToggleDay,
      onWindowRangeChange,
      onRedialCountChange,
      onRedialIntervalChange,
      submit,
    }),
    [
      inputs,
      submittedPayload,
      onToggleDay,
      onWindowRangeChange,
      onRedialCountChange,
      onRedialIntervalChange,
      submit,
    ],
  );

  return (
    <CampaignFormContext.Provider value={value}>{children}</CampaignFormContext.Provider>
  );
}

export function useCampaignForm() {
  const context = useContext(CampaignFormContext);
  if (!context) {
    throw new Error("useCampaignForm must be used within CampaignFormProvider");
  }
  return context;
}
