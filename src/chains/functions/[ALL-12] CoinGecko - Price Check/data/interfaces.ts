export interface Contracts {}

export interface OTFSettings {
  tokenName: string;
  checkAgainst: boolean;
  checkType: string;
  qty: number;
  windowStart?: number;
  timeout: number;
}
