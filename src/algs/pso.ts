//@ts-ignore
import pso from "pso";
import { eucd } from "../utils";

type Position = [number, number];

const POINTS: Position[] = [
  [8, 8],
  [2, 3],
  [2, 7],
];

const optimizeDistances = (target: Position) => {
  const distances = POINTS.map((point) => eucd(point, target));
  const maxDistance = Math.max(...distances);
  const diffs = distances.map((dist) => dist - maxDistance);
  return diffs.reduce((prev, curr) => prev + curr, 0);
};

export const getSolution = () => {
  const history = [];
  const optimizer = new pso.Optimizer();
  optimizer.setObjectiveFunction(optimizeDistances);
  optimizer.init(10, [
    { start: 0, end: 10 },
    { start: 0, end: 10 },
  ]);
  for (var i = 0; i < 40; i++) {
    optimizer.step();
    history.push(
      optimizer.getParticles().map((particle: any) => particle.position)
    );
  }
  return {
    best: optimizer.getBestFitness(),
    bestPos: optimizer.getBestPosition(),
    history,
  };
};
