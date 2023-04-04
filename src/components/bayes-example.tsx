import { Alert, Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useState } from "react";
import { predict } from "../algs/bayes";

const phreses = [
  "@ApplesnFeathers aww. Poor baby! On your only REAL day off.",
  "@cly_lit Get 100 followers a day using www.tweeteradder.com Once you add everyone you are on the train or pay vip",
  "What a great weekend, even managed some swimming in the (freezing!) ocean at Portrush.",
  "@jesus_iscomin  I am so sorry, that sucks!",
];

export const BayesExample = () => {
  const [result, setResult] = useState<any>();
  console.log(result);

  return (
    <Box>
      <Wrap>
        {phreses.map((text) => (
          <WrapItem key={text}>
            <Box
              rounded="lg"
              cursor="pointer"
              p="4"
              bg="gray.100"
              fontSize="xl"
              onClick={() => setResult(predict(text))}
            >
              {text}
            </Box>
          </WrapItem>
        ))}
      </Wrap>
      {result && (
        <Alert
          rounded="lg"
          status={result.value === "p" ? "success" : "error"}
          mt="8"
        >
          <Box>
            {result.value === "p" && (
              <Text fontWeight="bold" mb="2">
                Positive
              </Text>
            )}
            {result.value === "n" && (
              <Text fontWeight="bold" mb="2">
                Negative
              </Text>
            )}
            <pre>{JSON.stringify(result.stats, null, 2)}</pre>
          </Box>
        </Alert>
      )}
    </Box>
  );
};
