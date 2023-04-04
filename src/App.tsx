import { ChakraProvider, extendTheme, Theme } from "@chakra-ui/react";
import { Slides } from "./slides";
import "@fontsource/outfit";
import "@fontsource/outfit/800.css";

function App() {
  const theme = extendTheme({
    fonts: {
      heading: '"Outfit", sans-serif',
      body: '"Outfit", sans-serif',
    },
    config: { useSystemColorMode: false, initialColorMode: "light" },
  } as Theme);

  return (
    <ChakraProvider theme={theme}>
      <Slides />
    </ChakraProvider>
  );
}

export default App;
