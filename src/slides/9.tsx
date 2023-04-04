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

export const NinethSlide = () => {
  return (
    <Stack minH="100vh" justify="center" spacing="8">
      <Box>
        <Image mb="6" display="block" src="clustering.png" boxSize="20" />
        <Heading>K-means</Heading>
        <Text fontSize="xl" opacity={0.5}>
          Clustering algorithm
        </Text>
      </Box>
      <Stack spacing="6">
        <Text fontSize="xl">
          The K-means algorithm is an unsupervised learning algorithm used for
          clustering. It aims to partition a dataset into K clusters by
          minimizing the sum of squared distances between the data points and
          their assigned centroid. The algorithm can be sensitive to the initial
          centroid positions and can converge to a suboptimal solution.
        </Text>
        <HStack fontSize="xl" spacing="16">
          <Box flex={2}>
            <Text fontWeight="bold" mb="4">
              Steps:
            </Text>
            <OrderedList>
              <ListItem>
                Choose the number of clusters, K, that you want to divide the
                data into.
              </ListItem>
              <ListItem>Initialize K cluster centroids randomly.</ListItem>
              <ListItem>
                Assign each data point to the nearest centroid, forming K
                clusters.
              </ListItem>
              <ListItem>
                Update the centroid of each cluster to the mean of the data
                points assigned to it.
              </ListItem>
              <ListItem>
                Repeat steps 3 and 4 until the cluster assignments no longer
                change or a maximum number of iterations is reached.
              </ListItem>
            </OrderedList>
          </Box>
          <Box flex={1}>
            <Image mt="6" display="block" src="cluster.png" />
          </Box>
        </HStack>
      </Stack>
    </Stack>
  );
};
