interface RecaptchaResponse {
  action: string;
  challenge_ts: string;
  hostname: string;
  score: number;
  success: boolean;
}
