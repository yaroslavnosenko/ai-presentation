import {
  Heading,
  Box,
  Text,
  HStack,
  Image,
  Stack,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { BayesExample } from "../components/bayes-example";

export const SeventhSlide = () => {
  return (
    <Stack minH="100vh" justify="center" spacing="8">
      <Box>
        <Image mb="6" display="block" src="dices.png" boxSize="20" />
        <Heading>Bayes</Heading>
        <Text fontSize="xl" opacity={0.5}>
          The Bayesian algorithm
        </Text>
      </Box>
      <Stack spacing="6">
        <Text fontSize="xl">
          The Bayesian algorithm is a probabilistic approach to inference that
          uses Bayes' rule to update prior beliefs with new evidence. It has
          applications in various fields, including machine learning,
          statistics, and artificial intelligence.
        </Text>
        <HStack fontSize="xl" spacing="12">
          <Box flex={2}>
            <Text fontWeight="bold" mb="4">
              Steps:
            </Text>
            <OrderedList>
              <ListItem>
                Start with prior beliefs about the probability of different
                events.
              </ListItem>
              <ListItem>
                Collect new evidence that may support or contradict these
                beliefs.
              </ListItem>
              <ListItem>
                Update the prior beliefs using Bayes' rule, which combines the
                prior beliefs and the new evidence to obtain posterior beliefs.
              </ListItem>
              <ListItem>
                Repeat steps 2 and 3 as new evidence becomes available.
              </ListItem>
              <ListItem>
                Use the posterior beliefs to make predictions or decisions.
              </ListItem>
            </OrderedList>
          </Box>
          <Box flex={1}>
            <Image mt="6" display="block" src="bayes.png" />
          </Box>
        </HStack>
      </Stack>
    </Stack>
  );
};
