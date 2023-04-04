import { Box, useToken } from "@chakra-ui/react";
import { Bubble } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, PointElement } from "chart.js";
import rowData from "../assets/clustering.json";
import Kmeans, { kmeans } from "ml-kmeans";

ChartJS.register(LinearScale, PointElement);

export const options = {
  animation: {
    duration: 0,
  },
  aspectRatio: 2,
  scales: {
    y: {
      title: { display: true, text: "Spending Score (1-100)" },
      beginAtZero: true,
    },
    x: {
      title: { display: true, text: "Annual Income (k$)" },
      beginAtZero: true,
    },
  },
};

export const ClusteringExample = () => {
  const { clusters } = kmeans(rowData, 5, { maxIterations: 10000 });
  const colors = useToken("colors", [
    "red.300",
    "blue.300",
    "yellow.300",
    "teal.300",
    "purple.300",
  ]);

  const withClasters = clusters.map((row, index) => [...rowData[index], row]);
  console.log(withClasters);

  const POINTS = {
    data: rowData.map((row) => ({ x: row[0], y: row[1] })),
    backgroundColor: colors[0],
  };

  const FIRST_CLUSTER = {
    data: withClasters
      .filter((row) => row[2] === 0)
      .map((row) => [row[0], row[1]]),
    backgroundColor: colors[0],
  };

  const SECOND_CLUSTER = {
    data: withClasters
      .filter((row) => row[2] === 1)
      .map((row) => [row[0], row[1]]),
    backgroundColor: colors[1],
  };

  const THIRD_CLUSTER = {
    data: withClasters
      .filter((row) => row[2] === 2)
      .map((row) => [row[0], row[1]]),
    backgroundColor: colors[2],
  };

  const FOURTH_CLUSTER = {
    data: withClasters
      .filter((row) => row[2] === 3)
      .map((row) => [row[0], row[1]]),
    backgroundColor: colors[3],
  };

  const FIFTH_CLUSTER = {
    data: withClasters
      .filter((row) => row[2] === 4)
      .map((row) => [row[0], row[1]]),
    backgroundColor: colors[4],
  };

  const data = {
    datasets: [POINTS],
  };

  const resultData = {
    datasets: [
      FIRST_CLUSTER,
      SECOND_CLUSTER,
      THIRD_CLUSTER,
      FOURTH_CLUSTER,
      FIFTH_CLUSTER,
    ],
  };

  return (
    <Box>
      <Box mb="8">
        <Bubble options={options} data={data} />
      </Box>
      <Bubble options={options} data={resultData} />
    </Box>
  );
};
