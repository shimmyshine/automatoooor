export interface Contracts {
  [key: string]: string;
}
export interface OTFSettings {
  swapMethod: string;
  fromToken: string;
  toToken: string;
  slippage: number;
  quantityType: string;
  quantity: number;
  customRoute?: string[];
  deadline?: number;
  alternateReceiver?: string;
}
