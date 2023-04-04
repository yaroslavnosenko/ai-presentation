import { Heading, Box, Text, HStack, Image } from "@chakra-ui/react";
import { BayesExample } from "../components/bayes-example";

export const EightthSlide = () => {
  return (
    <HStack minH="100vh" spacing="16">
      <Box flex={1}>
        <Image mb="6" display="block" src="dices.png" boxSize="20" />
        <Heading>Message sentiment detection</Heading>
        <Text fontSize="xl" opacity={0.5}>
          Bayes practical task
        </Text>
        <Text fontSize="xl" mt="8">
          The task of creating a Bayesian system to detect message sentiment
          involves building a machine learning model that can classify text
          messages as either positive, negative based on their sentiment.
        </Text>
      </Box>
      <Box flex={1}>
        <BayesExample />
      </Box>
    </HStack>
  );
};
