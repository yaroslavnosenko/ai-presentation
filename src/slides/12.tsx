import { Heading, Stack, Text, Link, Image } from "@chakra-ui/react";

export const TwelweSlide = () => {
  return (
    <Stack minH="100vh" justify="center" spacing="2">
      <Image mb="4" display="block" src="clapping.png" boxSize="20" />
      <Heading size="2xl" py="6" fontWeight="800">
        Thanks for paying attention
      </Heading>
      <Heading size="lg">Tech Talk Košice 2023</Heading>
      <Text fontSize="xl">Yaroslav Nosenko • yaroslav.nosenko@infobip.com</Text>
      <Text fontSize="xl" fontWeight="bold">
        <Link color="blue.500" href="https://yaroslavnosenko.com">
          yaroslavnosenko.com
        </Link>
      </Text>
      <Image
        pos="fixed"
        ml="auto"
        display="block"
        src="infobip.png"
        boxSize="20"
        bottom="20"
        right="20"
      />
    </Stack>
  );
};
