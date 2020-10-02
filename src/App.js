import { Box, Flex, Heading, Image, Text, useColorMode } from "@chakra-ui/core";
import img from "./banner1.png";
import React from "react";
import "./App.css";
import NavBar from "./Navbar";

function ProductCard() {
  const { colorMode } = useColorMode();
  const primaryColor = colorMode === "dark" ? "white" : "inherit";
  const bgColor = colorMode === "dark" ? "gray.600" : "white";
  return (
    <Box
      mr={2}
      mb={10}
      bg={bgColor}
      color={primaryColor}
      w="150px"
      h="200px"
      shadow="2xl"
      rounded="lg"
    >
      <Image src={img} size="150px" shadow="2xl" roundedTop="lg" />
      <Flex align="center" justify="center" flexDir="column">
        <Heading fontWeight="semibold" fontSize="md">
          Product title
        </Heading>
        <Heading fontWeight="bold" fontSize="md">
          Ksh.500
        </Heading>
      </Flex>
    </Box>
  );
}

function App() {
  const { colorMode } = useColorMode();
  const primaryColor = colorMode === "dark" ? "white" : "inherit";
  const bgColor = colorMode === "dark" ? "gray.600" : "white";
  return (
    <Box
      w="100vw"
      m={0}
      bg={colorMode === "dark" ? "gray.900" : "inherit"}
      color={primaryColor}
    >
      <NavBar />
      <Flex w="100vw" flexWrap="wrap" align="center" justify="space-around">
        {Array(25)
          .fill("")
          .map((_, i) => (
            <ProductCard />
          ))}
      </Flex>
    </Box>
  );
}

export default App;
