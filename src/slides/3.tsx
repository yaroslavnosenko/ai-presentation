import { Heading, Stack, HStack, Box, Text, Image } from "@chakra-ui/react";

export const ThirdSlide = () => {
  return (
    <Stack minH="100vh" justify="center" spacing="16">
      <Box>
        <Image mb="6" display="block" src="geometry.png" boxSize="20" />
        <Heading>Non Neural Network AI Methods</Heading>
      </Box>
      <HStack spacing="24" align="start">
        <Box>
          <Text fontSize="2xl">Rule-based systems</Text>
          <Text fontSize="2xl">Expert systems</Text>
          <Text fontSize="2xl">Genetic algorithms</Text>
          <Text fontSize="2xl">Fuzzy logic</Text>
          <Text fontSize="2xl">Decision trees</Text>
          <Text fontSize="2xl">Random forests</Text>
        </Box>
        <Box>
          <Text fontSize="2xl">Naive Bayes classifier</Text>
          <Text fontSize="2xl">Clustering algorithms</Text>
          <Text fontSize="2xl">Optimization algorithms</Text>
        </Box>
      </HStack>
    </Stack>
  );
};
