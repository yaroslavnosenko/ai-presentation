import { Heading, Stack, Image, Box, Text } from "@chakra-ui/react";
import ChatGPT from "../assets/chat-gpt.svg";

export const SecondSlide = () => {
  return (
    <Stack minH="100vh" justify="center" spacing="16">
      <Box>
        <Heading>What is AI?</Heading>
        <Text fontSize="xl" opacity={0.5}>
          Lets ask AI what is AI
        </Text>
      </Box>
      <Box>
        <Image mb="4" display="block" src={ChatGPT} boxSize="20" />
        <Text fontSize="2xl">
          AI stands for Artificial Intelligence, which refers to the simulation
          of human intelligence in machines that are programmed to perform tasks
          that would normally require human intelligence to complete. This
          includes tasks such as visual perception, speech recognition, anomaly
          detection, decision-making, and language translation.
        </Text>
      </Box>
    </Stack>
  );
};
