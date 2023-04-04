import { Heading, Box, Text, HStack, Image } from "@chakra-ui/react";
import { ClusteringExample } from "../components/Clustering-example";

export const EleventhSlide = () => {
  return (
    <HStack minH="100vh" spacing="16">
      <Box flex={1}>
        <Image mb="6" display="block" src="clustering.png" boxSize="20" />
        <Heading>Customer segmentation</Heading>
        <Text fontSize="xl" opacity={0.5} mb="16">
          K-means practical task
        </Text>

        <Text fontSize="xl">
          <Text as="span" fontWeight="bold">
            Cluster 1.
          </Text>{" "}
          These are average income earners with average spending scores. They
          are cautious with their spending at the store.
        </Text>
        <Text mt="4" fontSize="xl">
          <Text as="span" fontWeight="bold">
            Cluster 2.
          </Text>{" "}
          The customers in this group are high income earners and with high
          spending scores. They bring in profit.
        </Text>
        <Text mt="4" fontSize="xl">
          <Text as="span" fontWeight="bold">
            Cluster 3.
          </Text>{" "}
          This group of customers have a higher income but they do not spend
          more at the store.
        </Text>
        <Text mt="4" fontSize="xl">
          <Text as="span" fontWeight="bold">
            Cluster 4.
          </Text>{" "}
          Low income earners with low spending score.
        </Text>
        <Text mt="4" fontSize="xl">
          <Text as="span" fontWeight="bold">
            Cluster 5.
          </Text>{" "}
          These are low income earning customers with high spending scores.
          Discounts and other offers targeted at this group will increase their
          spending score and maximize profit.
        </Text>
      </Box>
      <Box flex={1}>
        <ClusteringExample />
      </Box>
    </HStack>
  );
};
