import {
  Heading,
  Box,
  Text,
  HStack,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Image,
} from "@chakra-ui/react";

export const TenthSlide = () => {
  return (
    <HStack minH="100vh" spacing="16">
      <Box flex={2}>
        <Image mb="6" display="block" src="clustering.png" boxSize="20" />
        <Heading>Customer segmentation</Heading>
        <Text fontSize="xl" opacity={0.5}>
          K-means practical task
        </Text>
        <Text fontSize="xl" mt="8">
          The task of creating a K-means clustering system for retail store for
          customers involves grouping based on their purchasing behavior and
          income information. Number of groups:{" "}
          <Text as="span" fontWeight="bold">
            5
          </Text>
          .
        </Text>
      </Box>
      <Box flex={2}>
        <TableContainer mt="16">
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>Customer</Th>
                <Th>Spending Score (1-100)</Th>
                <Th>Annual Income (k$)</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>15</Td>
                <Td>39</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>15</Td>
                <Td>81</Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>16</Td>
                <Td>6</Td>
              </Tr>
              <Tr>
                <Td>4</Td>
                <Td>16</Td>
                <Td>77</Td>
              </Tr>
              <Tr>
                <Td>5</Td>
                <Td>17</Td>
                <Td>40</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Text mt="4">
          Data Source:
          https://www.kaggle.com/datasets/vjchoudhary7/customer-segmentation-tutorial-in-python
        </Text>
      </Box>
    </HStack>
  );
};
