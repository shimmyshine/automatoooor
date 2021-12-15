export interface RebaseCounter {
  timeStamp: number;
  nextRebaseTime: string;
  timeToNextRebase: number;
}

export interface Contracts {
  [key: string]: string;
}
