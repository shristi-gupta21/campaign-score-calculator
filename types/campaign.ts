export type RedialIntervalValue = "3" | "6" | "9" | "12" | "24";

export type CampaignInputs = {
  selectedDays: Set<string>;
  windowRange: [number, number];
  redialCount: number;
  redialInterval: RedialIntervalValue;
};

export type CampaignPenalties = {
  callingDays: number;
  callingWindow: number;
  redialCount: number;
  redialInterval: number;
};

export type WeatherLevel = 1 | 2 | 3 | 4;

export type CampaignScoreResult = {
  score: number;
  penalties: CampaignPenalties;
  weatherLevel: WeatherLevel;
};

export type CampaignScoreCardProps = {
  score: number;
  penalties: CampaignPenalties;
  weatherLevel: WeatherLevel;
};

export type GuardrailsProps = {
  selectedDays: Set<string>;
  onToggleDay: (day: string) => void;
  windowRange: [number, number];
  onWindowRangeChange: (range: number[]) => void;
};

export type RedialProps = {
  redialCount: number;
  onRedialCountChange: (count: number) => void;
  redialInterval: RedialIntervalValue;
  onRedialIntervalChange: (interval: string) => void;
};
