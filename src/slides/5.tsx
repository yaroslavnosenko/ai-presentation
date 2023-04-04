import {
  Heading,
  Stack,
  Image,
  Box,
  Text,
  OrderedList,
  ListItem,
  HStack,
  Code,
} from "@chakra-ui/react";

export const FifthSlide = () => {
  return (
    <Stack minH="100vh" justify="center" spacing="8">
      <Box>
        <Image mb="6" display="block" src="biology.png" boxSize="20" />
        <Heading>PSO</Heading>
        <Text fontSize="xl" opacity={0.5}>
          Particle Swarm Optimization
        </Text>
      </Box>
      <Stack spacing="6">
        <Text fontSize="xl">
          PSO is a metaheuristic optimization algorithm inspired by bird
          flocking or fish schooling behavior. It has been applied to various
          optimization problems and can be sensitive to the choice of
          parameters.
        </Text>
        <HStack fontSize="xl" spacing="16">
          <Box flex={2}>
            <Text fontWeight="bold" mb="4">
              Steps:
            </Text>
            <OrderedList>
              <ListItem>
                Initialize a swarm of particles with random positions and
                velocities in the search space.
              </ListItem>
              <ListItem>
                Evaluate the fitness of each particle using the objective
                function.
              </ListItem>
              <ListItem>
                Update the velocity and position of each particle based on its
                own best position and the best position of its neighbors within
                the swarm.
              </ListItem>
              <ListItem>
                Repeat step 2 and 3 for a fixed number of iterations or until a
                termination condition is met.
              </ListItem>
              <ListItem>
                Choose the best position among all particles as the solution to
                the optimization problem.
              </ListItem>
            </OrderedList>
          </Box>
          <Box flex={1}>
            <Image mt="6" display="block" src="pso.webp" />
          </Box>
        </HStack>
      </Stack>
    </Stack>
  );
};
