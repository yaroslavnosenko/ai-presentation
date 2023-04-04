export const eucd = (a: number[], b: number[]) => {
  return (
    a.map((x, i) => Math.abs(x - b[i]) ** 2).reduce((sum, now) => sum + now) **
    (1 / 2)
  );
};
