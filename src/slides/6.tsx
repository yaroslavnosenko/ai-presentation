import { Heading, Box, Text, HStack, Image, Code } from "@chakra-ui/react";
import { PSOExample } from "../components/pso-example";
import Highlight from "react-highlight";
import "highlight.js/styles/arduino-light.css";

export const SixthSlide = () => {
  return (
    <HStack minH="100vh" spacing="16">
      <Box flex={3}>
        <Image mb="6" display="block" src="biology.png" boxSize="20" />
        <Heading>Find closest point</Heading>
        <Text fontSize="xl" opacity={0.5}>
          PSO practical task
        </Text>
        <Box fontSize="lg" mt="8">
          <Highlight>
            {`
const optimizeDistances = (target: Position) => {
    const distances = POINTS.map((point) => eucd(point, target));
    const maxDistance = Math.max(...distances);
    const diffs = distances.map((dist) => dist - maxDistance);
    return diffs.reduce((prev, curr) => prev + curr, 0);
};
          `}
          </Highlight>
        </Box>
      </Box>
      <Box flex={2}>
        <PSOExample />
      </Box>
    </HStack>
  );
};
