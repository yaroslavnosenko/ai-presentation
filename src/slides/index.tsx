import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  FirstSlide,
  SecondSlide,
  ThirdSlide,
  FourthSlide,
  FifthSlide,
  SixthSlide,
  SeventhSlide,
  EightthSlide,
  NinethSlide,
  TenthSlide,
  EleventhSlide,
  TwelweSlide,
} from "./import";

const slides = [
  <FirstSlide />,
  <SecondSlide />,
  <ThirdSlide />,
  <FourthSlide />,
  <FifthSlide />,
  <SixthSlide />,
  <SeventhSlide />,
  <EightthSlide />,
  <NinethSlide />,
  <TenthSlide />,
  <EleventhSlide />,
  <TwelweSlide />,
];

export const Slides = () => {
  const [slide, setSlide] = useState(8);

  const handleKey = (event: KeyboardEvent) => {
    if (event.key === " ")
      setSlide((slide) => (slide < slides.length - 1 ? slide + 1 : slide));
    if (event.key === "ArrowLeft")
      setSlide((slide) => (slide > 0 ? slide - 1 : slide));
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <Container position="relative" minW="full" minH="100vh" px="16">
      {slides[slide]}
    </Container>
  );
};
