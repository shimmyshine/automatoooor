export interface Contracts {
  [key: string]: string;
}

export interface OTFSettings {
  fromToken: string;
  fromTokenDecimals: number;
  toToken: string;
  toTokenDecimals: number;
  firmToken: string;
  slippage: number;
  quantity: number;
  deadline: number;
  isDeflationary?: string;
  alternateReceiver?: string;
}
