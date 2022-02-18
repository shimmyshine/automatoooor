export function poolIDReadout(poolIDs: number[]): string {
  let readout = "";
  for (let i = 0; i < poolIDs.length; i++) {
    if (i === 0) {
      readout += poolIDs[i];
    } else if (i > 0) {
      readout += ", " + poolIDs[i];
    }
  }
  return readout;
}
