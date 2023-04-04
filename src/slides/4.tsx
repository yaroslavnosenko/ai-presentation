import { Heading, Stack, Box, Text, Image } from "@chakra-ui/react";

export const FourthSlide = () => {
  return (
    <Stack minH="100vh" justify="center" spacing="16">
      <Box>
        <Image mb="6" display="block" src="dollar.png" boxSize="20" />
        <Heading>Why do we need them?</Heading>
        <Text fontSize="xl" opacity={0.5}>
          NN vs Non-neural network algorithms
        </Text>
      </Box>
      <Stack spacing="6">
        <Text fontSize="xl">
          <Text as="span" fontWeight="bold">
            Data.{" "}
          </Text>
          Non-neural network algorithms may not require large amounts of labeled
          data, and their training process may be based on different approaches,
          such as rule-based systems, evolutionary algorithms, or statistical
          methods.
        </Text>
        <Text fontSize="xl">
          <Text as="span" fontWeight="bold">
            Flexibility.{" "}
          </Text>
          Non-neural network algorithms may be more specialized and may be
          designed for specific tasks, such as optimization, classification, or
          clustering.
        </Text>
        <Text fontSize="xl">
          <Text as="span" fontWeight="bold">
            Interpretability.{" "}
          </Text>
          Neural networks can be difficult to interpret. Non-neural network
          algorithms, on the other hand, may be more interpretable, as they are
          often based on explicit rules or models.
        </Text>
        <Text fontSize="2xl" pt="4" fontWeight="bold">
          Time & Money
        </Text>
      </Stack>
    </Stack>
  );
};
