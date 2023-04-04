import { Box, Button, HStack, Text, useToken } from "@chakra-ui/react";
import { Bubble } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, PointElement } from "chart.js";
import { getSolution } from "../algs/pso";
import { useState } from "react";

ChartJS.register(LinearScale, PointElement);

export const options = {
  animation: {
    duration: 0,
  },
  aspectRatio: 1,
  scales: {
    y: {
      beginAtZero: true,
      max: 10,
    },
    x: {
      beginAtZero: true,
      max: 10,
    },
  },
};

const { bestPos, history } = getSolution();

export const PSOExample = () => {
  const [tick, setTick] = useState(0);
  console.log(tick);
  const [red, blue] = useToken("colors", ["red.300", "blue.300"]);

  const onClick = () => {
    setInterval(() => {
      setTick((prev) => (prev < 18 ? prev + 1 : 19));
    }, 200);
  };

  const POINTS = {
    data: [
      {
        x: 8,
        y: 8,
        r: 20,
      },
      {
        x: 2,
        y: 3,
        r: 20,
      },
      {
        x: 2,
        y: 7,
        r: 20,
      },
    ],
    backgroundColor: red,
  };

  const HISTORY = {
    data: history[tick].map((pos: any) => ({
      x: pos[0],
      y: pos[1],
      r: 5,
    })),
    backgroundColor: blue,
  };

  const data = {
    datasets: [POINTS, HISTORY],
  };
  return (
    <Box>
      <Bubble options={options} data={data} />
      <Box h="16" mt="8">
        {tick === 0 && <Button onClick={onClick}>Play</Button>}
        {tick === 19 && (
          <>
            <Text fontSize="xl">X: {parseFloat(bestPos[0]).toFixed(2)}</Text>
            <Text fontSize="xl">Y: {parseFloat(bestPos[1]).toFixed(2)}</Text>
          </>
        )}
      </Box>
    </Box>
  );
};
