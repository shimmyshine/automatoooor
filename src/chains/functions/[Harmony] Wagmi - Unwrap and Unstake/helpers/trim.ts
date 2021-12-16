export function trim(number = 0, precision = 0): number {
  // why would number ever be undefined??? what are we trimming?
  const array = Number(number).toFixed(8).split(".");
  if (array.length === 1) return number;
  if (precision === 0) return Number(array[0]);

  const poppedNumber = array.pop() || "0";
  array.push(poppedNumber.substring(0, precision));
  const trimmedNumber = array.join(".");
  return Number(trimmedNumber);
}
