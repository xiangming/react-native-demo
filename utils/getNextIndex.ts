export const getNextIndex = (index: number, length: number): number => {
  return index < 0 ? length + index : index % length;
};
