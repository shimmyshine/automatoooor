export const calculateWrappedAssWagmi = (
  balance: string,
  currentIndex: string,
): number => {
  return Number(balance) * Number(currentIndex);
};
